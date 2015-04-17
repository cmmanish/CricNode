/*
 Module dependencies
 */
var express = require('express'),       // the main ssjs framework
    path = require('path'),             // for path manipulation
    mongoose = require('mongoose'),
    app = express();                    // create an express app
var db = require('./db');
var routes = require('./routes');       // by default, brings in routes/index.js
var port = process.env.PORT || 1982;
var router = express.Router();

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1982');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/get/teames', routes.getAllTeams);// Display Match Details

app.get('/get/match/:id', routes.getScorecard);

app.get('/get/news/:region', routes.getNews);

app.get('/about', function (req, res) {
    res.send('im the about page!');
});

//app.post('/get/match/:id', function (req, res) {
//    res.render('scoreboard.ejs');
//});


// launch app ======================================================================
app.listen(port, function (req, res) {
    console.log('https://127.0.0.1:' + port + '/');
});

//app.set('port', process.env.PORT || port);