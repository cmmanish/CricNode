var http = require('http');

var jsonObj = ''
var fetchScorecard = function (matchid) {

    var query = '/v1/public/yql?q=select+*+from+cricket.scorecard+where+match_id%3D';
    var query2 = '&format=json&env=store://0TxIGQMQbObzvU4Apia0V0';
    var body = '';

    var options = {
        host: 'query.yahooapis.com',
        path: query + matchid + query2
    };

        var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        if (res.statusCode == 404) {
            console.log(res.statusMessage);
        }
        else {
            res.on('data', function (chunk) {
                body += chunk
            });
            res.on('end', function () {
                jsonObj = JSON.parse(body);
                console.log("2jsonObj: ", jsonObj)
                //  console.log("JSON: ", jsonObj.query.results.Scorecard.mid);
                //console.log("JSON: ", jsonObj.query.results.Scorecard.series.series_name);
                //console.log("JSON : ", jsonObj);
                return jsonObj;
            });
        }
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();
    //return jsonObj;
}

module.exports = fetchScorecard;