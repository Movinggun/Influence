const express = require('express');
const app = express()
const http = require('http').createServer(app);
const dotenv = require('dotenv').config();

//////// API ROUTES /////////
const authRoute = require('./routes/authentication');


app.use(express.json());
app.use(express.static('public'));
app.disable('etag');


app.use('/auth', authRoute);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public'));
});

http.listen(process.env.API_PORT, () => console.log(`[Information] API Service Started on port: ${process.env.API_PORT}`))