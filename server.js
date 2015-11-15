//server.js

//BASE SETUP
//============================================================

//call the packages we need
var express = require('express'); //import express
var app = express(); //define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;        // set our port
var Character = require('../framedata/models/character');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/framedata");





// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

//middleware to use for all requests
router.use(function(req, res, next){
  //do logging
  console.log('something is happening!!!')
  next();//make sure we go to the next routes and not stop here
});

router.route('/characters')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        console.log("creating a new character");
        var character = new Character();
        if(character.name)      // create a new instance of the Bear model
          character.name = req.body.name;  // set the bears name (comes from the request)
        if(character.game)
          character.game = req.body.game;  // set the bears name (comes from the request)
        if(character.health)
          character.health = req.body.health;  // set the bears name (comes from the request)
        console.log("saving character");
        // save the bear and check for errors
        character.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Character created!' });
        });

    })
    .get(function(req, res) {
        Character.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here
router.route('/characters/:character_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Character.findById(req.params.character_id, function(err, character) {
            if (err)
                res.send(err);
            res.json(character);
        });
    })
    .put(function(req, res) {

       // use our bear model to find the bear we want
       Character.findById(req.params.character_id, function(err, character) {

           if (err)
              res.send(err);
           if(req.body.name)
              character.name = req.body.name;
           if(req.body.game)
              character.game = req.body.game;
           if(req.body.health)
              character.health = req.body.health;
             // update the bears info

           // save the bear
           character.save(function(err) {
               if (err)
                   res.send(err);

               res.json({ message: 'Character updated!' });
           });

       });
     })
     .delete(function(req, res) {
        Character.remove({
            _id: req.params.character_id
        }, function(err, character) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);
