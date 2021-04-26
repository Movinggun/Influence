const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


const User = require('../models/User');
const Influencer = require('../models/Influencer');

router.get('/', auth, async (req, res) => {
    try {
        await Influencer.find({}).sort().limit(10).exec( async (err, influencers) => {
            if (err) return  res.status(500).send('Server Error');

            for (influencer of influencers) {
                const user = await User.findById(influencer.user).select('-password').select('-first_name').select('-last_name').select('-__v').select('-_id');
                influencer['user_info'] = user;
            }
            return res.status(200).json(influencers);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;