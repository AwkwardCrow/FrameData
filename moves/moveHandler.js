var mongoose = require('mongoose');
var Games = require('../models/gameSchema');
var Characters = require('../models/characterSchema');
var Moves = require('../models/movesSchema');

exports.getAll = function(req, res){
    //get all the moves
    Moves.find(function(err, moves) {
        if (err)
        {
          res.send(err);
        }
        res.json(moves);
    });
};

exports.get = function(req, res){
    //get move by name
    Moves.find({name : req.params.move_name}, function(err, move) {
        if (err)
            res.send(err);
        res.json(move);
    });
}

exports.add = function(req, res){
    //add moves
    console.log("Creating a new move!");
    var move = new Moves();
    if(move.name)
      move.name = req.body.name;
    if(move.damage)
      move.damage = req.body.damage;
    if(move.startup)
      move.startup= req.body.startup;
    if(move.active)
      move.active = req.move.active;
    if(move.recovery)
      move.recovery = req.move.recovery;
    if(move.blockAdv)
      move.blockAdv = req.move.blockAdv;
    if(move.hitAdv)
      move.hitAdv = req.move.hitAdv;

    console.log("saving move");
    move.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Move created!' });
    });
}


exports.update = function(req, res){
    //update move by id
    Moves.find({name : req.params.move_name}, function(err, move) {
        if (err)
           res.send(err);
        if(move.name)
          move.name = req.body.name;
        if(move.damage)
          move.damage = req.body.damage;
        if(move.startup)
          move.startup= req.body.startup;
        if(move.active)
          move.active = req.move.active;
        if(move.recovery)
          move.recovery = req.move.recovery;
        if(move.blockAdv)
          move.blockAdv = req.move.blockAdv;
        if(move.hitAdv)
          move.hitAdv = req.move.hitAdv;
        move.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Move updated!' });
        });

    });
};

exports.delete = function(req, res){
    //delete a move
    Moves.remove({
        name: req.params.move_name
    }, function(err,move) {
        if (err)
            res.send(err);
        res.json({ message: 'Move deleted' });
    });
};
