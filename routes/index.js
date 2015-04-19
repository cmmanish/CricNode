var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
//var Scorecard = mongoose.model('Scorecard');
var httpScorecard = require('../rest/scorecard.js')
var httpPlayer = require('../rest/player.js')
var httpTeam = require('../rest/teams.js')
var httpTeamProfile = require('../rest/teamProfile.js')
var httpUpcomingSeries = require('../rest/upcomingSeries.js')
var JSONObject
var JSONArray = [];

exports.getAllTeams = function (req, res) {
    console.log("getAll");

    JSONObject = httpTeam.fetchNews();
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

exports.getScorecard = function (req, res) {

    var JSONObject = httpScorecard.fetchScorecard(req.params.id);

    if (JSONObject.query.results) {
        if (JSONObject.query.results.Scorecard.result)
            if (JSONObject.query.results.Scorecard.result.mom)
                var mom = JSONObject.query.results.Scorecard.result.mom.fn;
        var mid = JSONObject.query.results.Scorecard.mid;
        var series_name = JSONObject.query.results.Scorecard.series.series_name;
        var mn = JSONObject.query.results.Scorecard.mn;
        var stadium = JSONObject.query.results.Scorecard.place.stadium;
        var teamList = JSONObject.query.results.Scorecard.teams;

        var teamA = JSONObject.query.results.Scorecard.past_ings[1].d.a.t;
        var teamB = JSONObject.query.results.Scorecard.past_ings[0].d.a.t;

    }
    playerList = []
    for (var zz = 0; zz < teamA.length; zz++) {
        var id = teamA[zz].i;
        var playerJSON = httpPlayer.fetchPlayer(id);
        var firstName = playerJSON.query.results.Player.PersonalDetails.FirstName;
        var lastName = playerJSON.query.results.Player.PersonalDetails.LastName;
        var name = firstName + ' ' + lastName
        playerList.push(name);
    }

    res.render('scorecard.ejs', {
        mid: mid,
        series_name: series_name,
        mn: mn,
        playerList: playerList,
        stadium: stadium,
        teamList: teamList,
        teamA: teamA,
        teamB: teamB,
        mom: mom
    });
}

exports.getNews = function (req, res) {

    var JSONObject = httpScorecard.fetchNews(req.params.region);
    console.log(JSONObject);
    if (JSONObject.query.results) {
        console.log(newItemList);
        var newItemList = JSONObject.query.results.Scorecard.item;
        //for (var i = 0, len = newItemList.length; i < len; i++) {
        //    console.log("JSON: ", newItemList[i].author);
        //    console.log("JSON: ", newItemList[i].title);
        //}
        author1 = newItemList[0].author
        title1 = newItemList[0].title
        console.log(newItemList);
    }
    res.render('index.ejs', {
        author: author1,
        title: title1
    });

}

exports.getUpcomingSeries = function (req, res) {

    var JSONObject = httpUpcomingSeries.getUpcomingSeries();

    if (JSONObject.query.results) {
        var seriesList = JSONObject.query.results.Series;
    }
    res.render('upcomingSeries.ejs', {
        seriesList: seriesList
    });

}