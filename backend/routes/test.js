const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


router.get('/:id', async (req, res) => {
    let io = req.app.get('socketio');
    const sockets =  await io.fetchSockets();
    for (socket of sockets) {
        if (socket.decoded != undefined) {
            console.log("UID: " + socket.decoded.id)
            if (socket.decoded.id == req.params.id) {
                socket.emit("test", 'Hello My dude')
                return res.json({msg: 'Sent Event'});
            } 
        } else {
            require ('../sockets/auth')(socket);
        }
    }
     res.json({msg: 'Failed to send event'});
});



module.exports = router;