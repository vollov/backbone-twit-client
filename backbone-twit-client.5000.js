var http = require('http');
var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.use(favicon(__dirname + '/app/images/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
//app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/app')));

//app.get('*', function(req,res){
//	  res.sendfile('index.html', { root: path.resolve(__dirname + '/app') });
//	});

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
  //app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

