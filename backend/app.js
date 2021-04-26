const express = require('express');
const app = express()
const connectDB = require('./config/db');
const config = require('config');
const port = config.get('port');
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


// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/query/landing', require('./routes/queryLanding'));


app.listen(port, () => console.log(`Server started on port ${port}`))