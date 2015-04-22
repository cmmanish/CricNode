var scoreboard = require('../rest/scorecard.js')

var JSONoutput = scoreboard.fetchScorecard(186884);

var teamA = JSONoutput.query.results.Scorecard.past_ings[1].d.a.t;
var teamB = JSONoutput.query.results.Scorecard.past_ings[0].d.a.t;

for (var i = 0; i < teamA.length; i++) {
 //   console.log(teamA[i].c + " " + teamA[i].r + "(" + teamA[i].b + ")");
}
console.log(" ");
for (var i = 0; i < teamB.length; i++) {
 //   console.log(teamB[i].c + " " + teamB[i].r + "(" + teamB[i].b + ")");
}
console.log(JSONoutput.query.results.Scorecard.past_ings[0].d.a.t.i);
