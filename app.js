var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb'}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/'));
// catch 404 and forward to error handler
app.use(function(req, res) {
    res.render('404');
});

// production error handler
app.use(function(err, req, res, next) {
    // res.status(err.status || 500);
    console.error('页面错误：', err);
    res.render('error');
});

app.listen(3333, function() {
    console.log('server is listen on port 3333');
});


