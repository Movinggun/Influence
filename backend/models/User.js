const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 20,
        min: 2
    },
    display_name: {
        type: String,
        required: true,
        unique: true,
        max: 20,
        min: 2
    },
    first_name: {
        type: String,
        required: true,
        max: 20,
        min: 2
    },
    last_name: {
        type: String,
        required: true,
        max: 20,
        min: 2
    },
    password: {
        type: String,
        required: true,
        max: 20,
        min: 2
    },
    dob: {
        type: Date,
        required: true,
        default: Date.now
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
});
module.exports = mongoose.model('User', userSchema);
