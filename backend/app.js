const express = require('express');
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const connectDB = require('./config/db');
const config = require('config');
const port = config.get('port');
const socketioJwt = require('@thream/socketio-jwt')
// Connect Database
connectDB();

app.use(express.json());
app.use(express.static('public'));
app.disable('etag');


// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', function(req, res) {
    res.json({msg: "Welcome"})
});



io.on('connection', async (socket) => {
    const id = socket.handshake.query.id;
    console.log ("New User: " + id)
    socket.userID = socket.handshake.query.id;

    socket.on('disconnect', function () {
      console.log(socket.userID + ' disconnected!');
  });

  })



app.set('socketio', io);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/query/landing', require('./routes/queryLanding'));
app.use('/api/influencers', require('./routes/influencers'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/test', require('./routes/test'));


server.listen(port, () => console.log(`Server started on port ${port}`))