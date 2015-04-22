/*
 Module dependencies
 */
var express = require('express'),       // the main ssjs framework
    path = require('path'),             // for path manipulation
    mongoose = require('mongoose'),
    app = express();                    // create an express app
    db = require('./db'),
    routes = require('./routes'),       // by default, brings in routes/index.js
    port = process.env.PORT || 1982,
    router = express.Router(),

app.get('/get/upcomingSeries', routes.getUpcomingSeries);// Display Upcoming Series

app.get('/get/teams', routes.getAllTeams);// Display All Teams

app.get('/get/match/:id', routes.getScorecard);

app.get('/get/news/:region', routes.getNews);

app.get('/about', function (req, res) {
    res.send('im the about page!');
});

app.get('/', routes.getPastGames);

//app.post('/get/match/:id', function (req, res) {
//    res.render('scoreboard.ejs');
//});

// launch app ======================================================================
app.listen(port, function (req, res) {
    console.log('https://127.0.0.1:' + port + '/');
});