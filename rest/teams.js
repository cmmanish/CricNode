var request = require('sync-request');

var fetchTeams = function () {

    var teamUrl = 'http://query.yahooapis.com/v1/public/yql?q=' +
        'select%20*%20from%20cricket.teams' +
        '&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0'

    var res = request('GET', teamUrl);
    var JSONoutput = JSON.parse(res.body.toString());
    return JSONoutput;
}
module.exports.fetchTeams = fetchTeams;