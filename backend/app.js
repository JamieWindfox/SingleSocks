const createError = require('http-errors');
const passport = require('passport');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config({path: 'sec/secrets.env'}); // Puts variables in process.env
require('dotenv').config({path: 'environment.env'});
require('./etc/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// MongoDB
const credentials = 'sec/X509-cert-162076558419483000.pem'
const client = mongoose.connect('mongodb+srv://cluster0.w91hd.mongodb.net/singlesocks?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
    sslCert: credentials,
    ssl: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected')
});

app.set('uploadPath', 'images');
if(!fs.existsSync(app.settings.uploadPath))
  fs.mkdirSync(app.settings.uploadPath);

app.use(cors())
app.use(logger('dev'));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(lessMiddleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();

router.use('/users', require('./routes/users'));
router.use('/socks', require('./routes/socks'));
router.use('/containers', require('./routes/containers'));
router.use('/auth', require('./routes/auth'));
router.use('/attributes', require('./routes/attributes'));
router.use('/images', require('./routes/images'));

app.use("/api", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
