var scoreboard = require('../rest/scorecard.js')

function handleResult(err, result) {
    if (err) {
        console.error(err.stack || err.message);
        return;
    }
    console.log(result);

}
scoreboard.fetchScorecard(186882)