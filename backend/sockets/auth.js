const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Influencer = require('../models/Influencer');

module.exports = (socket) => {
    socket.on('authEvent', (data) => {
        console.log('Auth Handshake')
        if (data) {
            try {
                const verifed = jwt.verify(data, config.get('jwtSalt'));
                socket.decoded = verifed.user;
                socket.emit('authReturnEvent', true);
                console.log(verifed.user)
            } catch (error) {
                console.log("Invalid Auth Token");
                socket.emit('authReturnEvent', false);
                socket.disconnect();
            }
        }
    })
}