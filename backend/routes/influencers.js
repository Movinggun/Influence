const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const path = require('path');
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/uploads')      //you tell where to upload the files,
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
  })

const upload = multer({storage: storage,onFileUploadStart: function (file) {console.log(file.originalname + ' is starting ...')}});

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


router.post('/banner', upload.single('banner'), auth, async(req, res, next) => {

    await Influencer.findOneAndUpdate({ user: req.user.id }, {banner: `/uploads/${req.file.filename}`}, async (err, result) => {
        if (err) return res.status(400).json({msg: 'Failed to upload banner'});
        else {
            return res.status(200).json({msg: 'Banner Uploaded'});
        } 
    })
});

router.get('/banner/:id', async (req, res) => {
    let getUser = await Influencer.findOne({ user: req.params.id });

    res.sendFile(path.resolve(__dirname + `/../public${getUser.banner}`), function (err) {
        if (err) {
          console.log(err);
          res.sendFile(path.resolve(__dirname + '/../public/uploads/stock_banner.png'));
        }
    });
   
});


module.exports = router;