var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res){
    res.render('page/index');
});

// about page
app.get('/about', function(req, res){
    res.render('pages/about');
});

app.listen(4000);
console.log('app is running, use localhost:4000')