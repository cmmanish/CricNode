var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8081;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it

app.get('/', function(req, res) {
    res.send('Hello ExpressJS this is the Homepage');
});

app.get('/sample', function(req, res) {
    res.send('this is a sample!');
});

app.get('/status', function(req, res) {
    res.send('this is a status');
});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);