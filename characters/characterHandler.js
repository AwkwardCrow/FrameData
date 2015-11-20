var mongoose = require('mongoose');
var Games = require('../models/gameSchema');
var Characters = require('../models/characterSchema');
var Moves = require('../models/movesSchema');

exports.getAll = function(req, res){
    //get all the characters
    Characters.find(function(err, characters) {
        if (err)
        {
          res.send(err);
        }
        res.json(characters);
    });
};

exports.get = function(req, res){
    //get character by name
    Characters.find({name : req.params.character_name}, function(err, character) {
        if (err)
            res.send(err);
        res.json(character);
    });
}

exports.add = function(req, res){
    //add characters
    console.log("Creating a new character!");
    var character = new Characters();
    if(character.name)
      character.name = req.body.name;
    if(character.health)
      character.health = req.body.health;
    if(character.game)
    {
      character.game = req.body.game;
      //look up game by name, then get character by this name.
      //if character does not exist, push to game character []
    }
    console.log("saving character");
    character.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Character created!' });
    });
}


exports.update = function(req, res){
    //update character by id
    Characters.find({name : req.params.character_name}, function(err, character) {
        if (err)
           res.send(err);
        if(character.name)
          character.name = req.body.name;
        if(character.health)
          character.health = req.body.health;
        if(character.game)
          character.game = req.body.game;
        character.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Character updated!' });
        });

    });
};

exports.delete = function(req, res){
    //delete a character
    Characters.remove({
        name: req.params.character_name
    }, function(err,character) {
        if (err)
            res.send(err);
        res.json({ message: 'Character deleted' });
    });
};
