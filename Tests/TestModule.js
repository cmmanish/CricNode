var scorecard = require('./../rest/scorecard');
var teamProfile = require('./../rest/teamProfile');

var JSONObject = scorecard.fetchScorecard("186884");

//console.log("JSON: ", JSONObject.query.results.Scorecard.mid);
//console.log("JSON: ", JSONObject.query.results.Scorecard.series.series_name);
//console.log("JSON : ", JSONObject.query.results.Scorecard.mn);
//console.log("JSON : ", JSONObject.query.results.Scorecard.place.stadium);
//console.log("JSON : ", JSONObject.query.results.Scorecard.ms);
//console.log("JSON : ", JSONObject.query.results.Scorecard.result.mom.fn);
//console.log(" ");

var JSONObject = teamProfile.fetchTeamProfile("4");
var teamProfile = JSONObject.query.results.TeamProfile;

console.log("JSON: ", teamProfile.TeamName);
console.log("JSON: ", teamProfile.Ranking[0].content);
console.log("JSON: ", teamProfile.Captain[0].FirstName + " " + JSONObject.query.results.TeamProfile.Captain[0].LastName);
console.log("JSON: ", teamProfile.Coach.FirstName + " " + teamProfile.Coach.LastName);
//console.log(" ");