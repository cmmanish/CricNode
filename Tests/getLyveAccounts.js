//https://accounts.dogfood.blackpearlsystems.net/accounts/emails/a@lyveminds.com

var http = require('http');

var options = {
    host: 'accounts.dogfood.blackpearlsystems.net',
    path: '/accounts/emails/a@lyveminds.com'
};

callback = function(response) {
    var str = '';

    console.log(response.statusMessage);
    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        console.log(str);
    });
}

var req = http.request(options, callback);
req.write("hello world!");
req.end();