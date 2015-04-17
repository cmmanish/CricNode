var request = require('sync-request');

exports.fetchScorecard = function (matchid) {

    var scorecardUrl = 'http://query.yahooapis.com/v1/public/yql?q=' +
        'select+%20*+from+cricket.scorecard+where+match_id%3D'
        + matchid + '&format=json&env=store://0TxIGQMQbObzvU4Apia0V0'

    var res = request('GET', scorecardUrl);

    //console.log(JSONoutput)
    var JSONoutput = JSON.parse(res.body.toString());
    console.log(JSONoutput)
    return JSONoutput;
}