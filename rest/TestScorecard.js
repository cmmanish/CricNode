var scoreboard = require('../rest/scorecard.js')


var scorecard1 = new scoreboard("186885");

function handleResult(err, result) {
    if (err) {
        console.error(err.stack || err.message);

        return;
    }
}
scoreboard.fetchScorecard(handleResult);

