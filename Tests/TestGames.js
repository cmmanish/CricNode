/**
 * Created by mmadhusoodan on 4/18/15.
 */
var httpUpcomingGames = require('../rest/pastGames.js')

var JSONObject = httpUpcomingGames.getPastGames();

var matchList = JSONObject.query.results.Match;


for (var i = 0; i < matchList.length; i++) {

    console.log(matchList[i].matchid + " " +
    matchList[i].Team[0].Team + " vs " + matchList[i].Team[1].Team);

}