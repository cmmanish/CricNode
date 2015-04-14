// if our user.js file is at app/models/Scorecard.js
var mongoose = require('mongoose');
var Scorecard = require('../models/Scorecard');

// create a new MatchDetails called WCFinal
var wccFinal = new Scorecard(
    {
        mid: '186885',
        series: 'World Cup Coverage',
        stadium: 'Melbourne Cricket Ground (MCG), Melbourne',
        match: 'Final',
        matchStatus: 'Match Ended',
        team1: 'Australia',
        team2: 'New Zealand',
        mom: 'James Faulkner'
    }
);

// call the built-in save method to save to the database
wcFinal.save(function (err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('Scorecard saved successfully!');
    }
});
