const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Notification = require('../models/Notification');
const User = require('../models/User');




router.post('/:id', [
    check('title', 'Please include a notification title.').exists(),
    check('message', 'Please include a notification message.').exists()
], async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, message } = req.body;

    try {
        let getUser = await User.findOne({ _id: req.params.id });

        if (!getUser) return res.status(400).json({msg: 'Could not find user to send attach notification.'});

        let notif = new Notification( {title, message, user: req.params.id });
        await notif.save();

        let io = req.app.get('socketio');
        const sockets =  await io.fetchSockets();
        for (socket of sockets) {
            if (socket.userID != undefined) {
                console.log(socket.userID)
                if (socket.userID == req.params.id) {
                    socket.emit("notifUpdate")
                    return res.json({msg: 'Added Notification'});
                } 
            } 

        }
        return res.json({msg: 'No Users Connected Via Socket'});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({msg: 'Failed to find user'});
    }

});

router.put('/:id', [
    check('read', 'Must enter a read boolean').isBoolean().exists()
] ,auth, async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { read } = req.body;

        let notif = await Notification.findById(req.params.id);

        if (!notif) return res.status(404).json({ msg: 'Notification was not found' });

        //make sure user owns notifi
        if (notif.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        notif = await Notification.findByIdAndUpdate(req.params.id, {read});
        res.json({msg: "notification updated"})


    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', auth,  async(req, res) => {
    try {
        let notif = await Notification.findById(req.params.id);
        if (!notif) return res.status(404).json({ msg: 'Notification was not found' });

        if (notif.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        await Notification.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Notification Removed'})


    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})



module.exports = router;