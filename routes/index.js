var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
//var Scorecard = mongoose.model('Scorecard');
var httpScorecard = require('../rest/scorecard.js')
var httpTeam = require('../rest/teams.js')
var httpTeamProfile = require('../rest/teamProfile.js')
var JSONObject
var JSONArray = [];

exports.getAllTeams = function (req, res) {
    console.log("getAll");

    JSONObject = httpTeam.fetchTeams();
    JSONArray = JSONObject.query.results.Team;

    if (JSONObject.results) {
        var mid = JSONObject.results.Scorecard.mid;
        //var series_name = JSONObject.query.results.Scorecard.series.series_name;
        //var mn = JSONObject.query.results.Scorecard.mn;
        //var stadium = JSONObject.query.results.Scorecard.place.stadium;
        //if (JSONObject.query.results.Scorecard.result.mom)
        //    var mom = JSONObject.query.results.Scorecard.result.mom.fn;
    }

    res.render('team.ejs', {
        mid: mid,
        series_name: series_name,
        mn: mn,
        stadium: stadium,
        mom: mom
    });

}

// get a user with ID of 186885
exports.getTeamProfile = function (req, res) {

    var JSONObject = httpTeamProfile.fetchTeamProfile(req.params.id);

    if (JSONObject.query.results) {
        var mid = JSONObject.query.results.Scorecard.mid;
        var series_name = JSONObject.query.results.Scorecard.series.series_name;
        var mn = JSONObject.query.results.Scorecard.mn;
        var stadium = JSONObject.query.results.Scorecard.place.stadium;
        if (JSONObject.query.results.Scorecard.result.mom)
            var mom = JSONObject.query.results.Scorecard.result.mom.fn;
    }
    res.render('scorecard.ejs', {
        mid: mid,
        series_name: series_name,
        mn: mn,
        stadium: stadium,
        mom: mom
    });
}

// get a user with ID of 186885
exports.getScorecard = function (req, res) {

    var JSONObject = httpScorecard.fetchScorecard(req.params.id);

    if (JSONObject.query.results) {
        var mid = JSONObject.query.results.Scorecard.mid;
        var series_name = JSONObject.query.results.Scorecard.series.series_name;
        var mn = JSONObject.query.results.Scorecard.mn;
        var stadium = JSONObject.query.results.Scorecard.place.stadium;
        if (JSONObject.query.results.Scorecard.result.mom)
            var mom = JSONObject.query.results.Scorecard.result.mom.fn;
    }
    res.render('scorecard.ejs', {
        mid: mid,
        series_name: series_name,
        mn: mn,
        stadium: stadium,
        mom: mom
    });
}

exports.getScorecard1 = function (req, res) {
    console.log("mid: " + req.params.id);
    Scorecard.find({"mid": req.params.id}, function (err, scorecard) {
        console.log(res)
        console.log("find mid = ", req.params.id);
        if (err) {
            console.log(err);
            res.json({'Error': 'Something went wrong'})
            throw err;
        }
        else {
            res.json({'scorecard': scorecard});
            res.sendfile('Scorecard.html');
        }
        // show the scorecard
        console.log(scorecard);
    });
}