const router = require('express').Router();
const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


const User = require('../models/User');
const Influencer = require('../models/Influencer');

router.put('/branch', [
    check('account_type', 'Branch is requird').exists()
], auth,  async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { account_type } = req.body;

    try {
        let getUser = await User.findOne({ _id: req.user.id });
        if (getUser.account_type === 'none') {
            await User.findOneAndUpdate({ _id: req.user.id }, {account_type}, async (err, result) => {
                if (err) return res.status(400).json({msg: 'Failed to set account type'});
                else {
                    switch(account_type) {
                        case 'influencer':
                            await new Influencer({user: req.user.id}).save();
                    }
                    return res.status(200).json({msg: 'Account Type has been set'});
                } 
            })
        } else {
            return res.status(400).json({msg: 'Account type already set!'});
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});




module.exports = router;