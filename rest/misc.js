var http = require('http');

var query = '/v1/public/yql?q=select+*+from+cricket.scorecard+where+match_id%3D';
var query2 = '&format=json&env=store://0TxIGQMQbObzvU4Apia0V0';
var body = '';

var options = {
    host: 'query.yahooapis.com',
    path: '/v1/public/yql?q=select+*+from+cricket.scorecard+where+match_id%3D186885&format=json&env=store://0TxIGQMQbObzvU4Apia0V0'
};

var getJson = http.request(options, function (res) {

    console.log('STATUS: ' + res.statusCode);

    var query

    if (res.statusCode == 404) {
        console.log(res.statusMessage);
    } else {
        res.on('data', function (chunk) {
            body += chunk
        });
    }

    res.on('end', function () {
        var JSONoutput = JSON.parse(body);
        //console.log("jsonObj: ", JSONoutput)
        //console.log("JSON: ", jsonObj.query.results.Scorecard.mid);

        query = JSONoutput.query.results.Scorecard
    });

    return query

});

getJson.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

getJson.end();

module.exports.getJson = getJson;

