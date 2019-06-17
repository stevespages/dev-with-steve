var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Importing the code from the Code Examples. Each one is a file in the routes directory
const differentRouteRouter = require('./routes/different-route');
const envVarRouter = require('./routes/env-var');
const mailerRouter= require('./routes/mailer');
const externalJavascriptRouter = require('./routes/external-javascript');
const multerRouter = require('./routes/multer');
const multer2FilesRouter = require('./routes/multer-2-files');
const multerVariableNumberFilesRouter = require('./routes/multer-variable-number-files');
const loginDemoPageRouter = require('./routes/login-demo-page');
const usersLogin = require('./routes/users');
const javascriptAndJqueryRouter = require('./routes/javascript-and-jquery');
const jqueryCounterRouter = require('./routes/jquery-counter');

var app = express();

app.use(session({
        secret: 'dsklafjjkkkkkkfjjfiieoieiohoihohisdfj'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// I am not using this as requests to / are for sphinx-documentation
// app.use('/', indexRouter);
// I am not using this application generator route
// app.use('/users', usersRouter);

// middlewares for the code examples
app.use('/different-route', differentRouteRouter);
app.use('/env-var', envVarRouter);
app.use('/mailer', mailerRouter);
app.use('/external-javascript', externalJavascriptRouter);
app.use('/multer', multerRouter);
app.use('/multer-2-files', multer2FilesRouter);
app.use('/multer-variable-number-files', multerVariableNumberFilesRouter);
app.use('/login-demo-page', loginDemoPageRouter);
app.use('/users', usersLogin);
app.use('/javascript-and-jquery', javascriptAndJqueryRouter);
app.use('/jquery-counter', jqueryCounterRouter);

// this serves the html files generated by sphinx
app.use(express.static(path.join(__dirname, 'sphinx-documentation/_build/html')));

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
