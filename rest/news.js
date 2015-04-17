var request = require('sync-request');

exports.fetchNews = function () {

    var newsUrl = 'https://query.yahooapis.com/v1/public/yql?q=' +
        'select%20*%20from%20cricket.news%20%20where%20region%3D%22in%22&format=json' +
        '&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback='

    var res = request('GET', newsUrl);
    try {
        var JSONoutput = JSON.parse(res.body.toString());
    }
    catch (e) {
        console.log(e);
    }
    return JSONoutput;
}