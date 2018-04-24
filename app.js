var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutUsRouter = require('./routes/about-us');
var eventsRouter = require('./routes/events');
var partnersRouter = require('./routes/partners');
var resourcesRouter = require('./routes/resources');
var blogRouter = require('./routes/blog');
var contactUsRouter = require('./routes/contact-us');

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about-us', aboutUsRouter);
app.use('/events', eventsRouter);
app.use('/partners', partnersRouter);
app.use('/resources', resourcesRouter);
app.use('/blog', blogRouter);
app.use('/contact-us', contactUsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;

var listener = app.listen(process.env.PORT || 8000, process.env.IP, function() {
    console.log("Port number: " + listener.address.port);
    console.log("IP Address: " + listener.address.ip);
});
