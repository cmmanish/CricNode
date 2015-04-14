var request = require('sync-request');


var fetchScorecardAsync = function (matchid) {

    var scorecardUrl = 'http://query.yahooapis.com/v1/public/yql?q=' +
        'select+%20*+from+cricket.scorecard+where+match_id%3D'
        + matchid + '&format=json&env=store://0TxIGQMQbObzvU4Apia0V0'

    var res = request('GET', scorecardUrl);

    //console.log("Reponse Body Length: ", res.getBody().length);
    // console.log("Reponse Body: ", res.body.toString());

    var JSONoutput = JSON.parse(res.body.toString());

    //console.log("Reponse Body: ", JSONoutput);
    return JSONoutput;
}

module.exports.fetchScorecardAsync = fetchScorecardAsync;