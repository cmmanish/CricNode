var request = require('sync-request');

exports.fetchPlayer = function (playerId) {

    var playerUrl = 'https://query.yahooapis.com/v1/public/yql?q=' +
        'select%20*%20from%20cricket.players%20where%20player_id%3D%20' +
        playerId + '&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback='

    var res = request('GET', playerUrl);
    var JSONoutput = JSON.parse(res.body.toString());
    return JSONoutput;
}