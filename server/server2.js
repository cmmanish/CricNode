var express = require('express');
var app = express();
var port = process.env.PORT || 8082;
// get an instance of router
var router = express.Router();


// home page route (http://localhost:8080)
router.get('/', function (req, res) {
    res.send('im the home page!');
});
// about page route (http://localhost:8080/about)
router.get('/about', function (req, res) {
    res.send('im the about page!');
});

// about page route (http://localhost:8080/about)
router.get('/status', function (req, res) {
    res.send('im the status page!');
});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});

router.use(function (req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next();
});

// apply the routes to our application
app.use('/', router);

var server =  app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Magic happens at host ' + host + '' + port);
    console.log('https://127.0.0.1:'+ port + '/');
})