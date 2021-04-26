const mongoose = require('mongoose');
const landingSearchSchema = new mongoose.Schema({
    term: {
        type: String,
        required: true,
        unique: true,
        max: 60,
        min: 2
    },
    count: {
        type: Number,
        required: true,
        default: 1
    },
});
module.exports = mongoose.model('LandingSearch', landingSearchSchema);
