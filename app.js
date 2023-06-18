var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Khai báo route
var toyRouter = require('./routes/toy');

var app = express();

//khai báo bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))

//Khai báo DB
var mongoose = require("mongoose");
var uri = "mongodb+srv://thanhttgbh210727:DN5sdI1rVL7E0AnR@gch1101.gazkxzq.mongodb.net/Assignment";
mongoose.connect(uri)
.then(() => console.log ("Connect to DB successfully !"))
.catch((err) => console.log (err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('users', userRouter);
app.use('/toy', toyRouter);

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

var port = process.env.PORT || 3001;
app.listen (port);

module.exports = app;
