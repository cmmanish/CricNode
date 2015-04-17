var request = require('sync-request');

exports.getUpcomingSeries = function () {

    var upcomingSeriesUrl = 'https://query.yahooapis.com/v1/public/yql?q=' +
        'select%20*%20from%20cricket.series.upcoming&format=json' +
        '&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0'

    var res = request('GET', upcomingSeriesUrl);
    try {
        var JSONoutput = JSON.parse(res.body.toString());
    }
    catch (e) {
        console.log(e);
    }
    return JSONoutput;
}