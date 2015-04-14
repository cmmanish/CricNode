var express = require('express')
var app = express()

//routes
app.get('/', function(req, res){
	res.render('index')
  });

app.get('/status', function (req, res) {
    res.send('All iZ well')
});

// sample route with a route the way we're used to seeing it
app.get('/sample', function (req, res) {
    res.send('this is a sample!');
});

var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Magic happens at host ' + host + '' + port);
    console.log('app listening at http://%s:%s', host, port)
})