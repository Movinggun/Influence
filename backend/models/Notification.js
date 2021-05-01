const mongoose = require('mongoose');
const notificationsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 60,
        min: 2
    },
    message: {
        type: String,
        required: true,
        max: 60,
        min: 2
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
});
module.exports = mongoose.model('Notifications', notificationsSchema);
