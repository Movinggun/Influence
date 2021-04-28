const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const multer  = require('multer');
const path = require('path');
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


router.post('/avatar', upload.single('avatar'), auth, async(req, res, next) => {

    await User.findOneAndUpdate({ _id: req.user.id }, {avatar: `/uploads/${req.file.filename}`}, async (err, result) => {
        if (err) return res.status(400).json({msg: 'Failed to set account type'});
        else {
            return res.status(200).json({msg: 'Image Uploaded'});
        } 
    })


});

router.get('/avatar/:id', async (req, res) => {
    let getUser = await User.findOne({ _id: req.params.id });

    res.sendFile(path.resolve(__dirname + `/../public${getUser.avatar}`), function (err) {
        if (err) {
          console.log(err);
          res.sendFile(path.resolve(__dirname + '/../public/uploads/stock.png'));
        }
    });
   
});



module.exports = router;