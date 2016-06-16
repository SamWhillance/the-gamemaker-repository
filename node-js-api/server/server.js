// set up ======================================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3002;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================
mongoose.connect('mongodb://admin:admin@ds015584.mlab.com:15584/test-db');

app.use(express.static(__dirname + '/www'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// routes ======================================================================
require('./app/routes.js')(app);

// listen ======================================================================
app.listen(port, function(){
	console.log("App listening on port " + port);
});
