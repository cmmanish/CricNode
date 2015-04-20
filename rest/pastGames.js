var request = require('sync-request');

exports.getPastGames = function () {

    var pastGameUrl = 'https://query.yahooapis.com/v1/public/yql?q=' +
        'select%20*%20from%20cricket.past_matches&format=json&' +
        'env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0'

    var res = request('GET', pastGameUrl);
    try {
        var JSONoutput = JSON.parse(res.body.toString());
    }
    catch (e) {
        console.log(e);
    }
    return JSONoutput;
}