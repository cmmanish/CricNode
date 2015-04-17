var request = require('sync-request');

exports.fetchTeamProfile = function (teamId) {

    var teamProfileUrl = 'http://query.yahooapis.com/v1/public/yql?q=' +
        'select%20*%20from%20cricket.team.profile%20where%20team_id%3D' + teamId +
        '&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0'

    //console.log(teamProfileUrl);
    var res = request('GET', teamProfileUrl);
    var JSONoutput = JSON.parse(res.body.toString());
    return JSONoutput;
}