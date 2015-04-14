var express = require('express');
var app = express();
var port = process.env.PORT || 8083;
var router = express.Router();

// routes ======================================================================
//require('./routes/index.js')(router); // load our routes and pass in our router

// home page route (http://localhost:8080)
router.get('/', function (req, res) {
    res.send('im the home page!');
});

app.set('view engine', 'ejs'); // set up ejs for templating
// launch ======================================================================
app.listen(port, function (req, res) {
    console.log('https://127.0.0.1:' + port + '/');
});