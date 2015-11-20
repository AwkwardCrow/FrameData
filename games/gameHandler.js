var mongoose = require('mongoose');
var Games = require('../models/gameSchema');
var Characters = require('../models/characterSchema');
var Moves = require('../models/movesSchema');

exports.getAll = function(req, res){
    //get all the characters
    Games.find(function(err, games) {
        if (err)
        {
          res.send(err);
        }
        res.json(games);
    });
};

exports.get = function(req, res){
    //get game by name
    Games.find({name : req.params.game_name}, function(err, game) {
        if (err)
            res.send(err);
        res.json(game);
    });
}

exports.add = function(req, res){
    //add games
    console.log("creating a new game");
    var game = new Games();
    game.name = req.body.name;
    game.version = req.body.version;
    game.systems.push(req.body.system);
    console.log("saving game");
    game.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Game created!' });
    });
}


exports.update = function(req, res){
    //update character by id
    Games.find({name : req.params.game_name}, function(err, game) {
        if (err)
           res.send(err);
        game.name = req.body.name;
        game.version = req.body.version;
        game.system = req.body.system;
        game.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Game updated!' });
        });

    });
};

exports.delete = function(req, res){
    //delete a character
    Games.remove({
        name: req.params.game_name
    }, function(err,game) {
        if (err)
            res.send(err);

        res.json({ message: 'Game deleted' });
    });
};
