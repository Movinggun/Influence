const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Influencer = require('../models/Influencer');

module.exports = (socket) => {

    console.log("Loaded notifs Events ")
    socket.on('getUID', () => {
        console.log('Event Fired')
        socket.emit("notifEvent",  socket.auth)
    })

}