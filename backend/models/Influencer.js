const mongoose = require('mongoose');
const influencerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    user_info: {
        type: Array,
    },
    level: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10],
        default: 1,       
    },
    rating: {
        type: Number,
        required: true,
        enum: [1.0, 2.0, 3.0, 4.0, 5.0],
        default: 3.0,       
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    social_media: {
        type: Array,
        required: true,
        //enum: ["Twitch", "Twitter", "Instagram", "Youtube", "Snapchat", "Tiktok"],
        default: [
            "Twitch",
            
        ]
    },
    card_description: {
        type: String,
        required: true,
        default: 'Influencer using Influence!'

    },
    starting_payment: {
        type: String,
        required: true,
        default: "$5"
    },
    banner: {
        type: String,
        required: false,
        max: 200,
        min: 2
    },
});
module.exports = mongoose.model('Influencer', influencerSchema);
