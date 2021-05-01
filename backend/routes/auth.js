const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Influencer = require('../models/Influencer');
const Notification = require('../models/Notification');

router.get('/', auth, async (req, res) => {
    try {
        const getUser = await User.findById(req.user.id).select('-password');
        const notifications = await Notification.find({user: req.user.id}).select('-__v').select('-user').limit(10);
        console.log("Notifs:" + notifications)
        getUser['notifications'] = notifications;
        switch (getUser.account_type) {
            case "influencer":
                const influencer = await Influencer.find({user: req.user.id}).select('-user_info').select('-__v').select('-user');
                getUser['account_type_info'] = influencer;
                return res.json(getUser);
                
            case "brand":
                break;    
            case 'service_provider':
                break;    
        }
        res.json(getUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', [
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) return res.status(400).json({msg: 'Invalid Username or Password'});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Username or Password'});

        const payload = {
            user: {
                id: user.id
            }
        }
 
        jwt.sign(payload, config.get('jwtSalt'), { expiresIn: 360000}, (err, token) => {  if (err) throw err; res.json({ token })})
 

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});



router.post('/register', [
    check('display_name', 'Display name is required').not().isEmpty(),
    check('first_name', 'First name is required').not().isEmpty(),
    check('last_name', 'Last name is required').not().isEmpty(),
    check('dob', 'Date Of Birth is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { display_name, email, first_name, last_name, dob, password } = req.body;

    try {
        let user = await User.findOne( { email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists'});
        }

        user = new User( {display_name, email, first_name, last_name, dob, password});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

       const payload = {
           user: {
               id: user.id
           }
       }

       jwt.sign(payload, config.get('jwtSalt'), { expiresIn: 360000}, (err, token) => {  if (err) throw err; res.json({ token })})

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


});


module.exports = router;