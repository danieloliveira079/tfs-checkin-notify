'use strict';

var path        = require('path');
var url         = require('url');
var express     = require('express');
var ejs         = require('ejs');
var browserify  = require('connect-browserify');
var ReactAsync  = require('react-async');
var nodejsx     = require('node-jsx').install();
var App         = require('./server/component/commit_info.jsx');

var development = process.env.NODE_ENV !== 'production';

function renderApp(req, res, next) {
  var path = url.parse(req.url).pathname;
  var app = App();
  ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
    if (err) {
      return next(err);
    }
    res.render('index.ejs', {
      main: markup
    });
    //res.send('<!doctype html>\n' + markup);
  });
}

/*var api = express()
  .get('/users/:username', function(req, res) {
    var username = req.params.username;
    res.send({
      username: username,
      name: username.charAt(0).toUpperCase() + username.slice(1)
    });
  });*/

var app = express();


app.set('views', __dirname + '/server/views/');
app.engine('ejs', ejs.renderFile);

/*
if (development) {
  app.get('/assets/bundle.js',
    browserify('./client', {
      debug: true,
      watch: true
    }));
}*/

app
  .use('/public', express.static(path.join(__dirname, 'public')))
  //.use('/api', api)
  .use(renderApp)
  .listen(3000, function() {
    console.log('Point your browser at http://localhost:3000');
  });
