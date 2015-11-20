//server.js

//BASE SETUP
//============================================================

//call the packages we need
var express = require('express'); //import express
var app = express(); //define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');        // set our port
var characters = require('./characters/characterRoutes');
var moves = require('./moves/moveRoutes');
var games = require('./games/gameRoutes');
module.exports = app;

var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/framedata");


// ROUTES FOR OUR API
// =============================================================================
//default,eventually this will launch to a screen with tabs for games to dive in to
app.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
//character routes

games(app);
characters(app);
moves(app);

//add in more routes in a similar manner, calling the specific route
// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
