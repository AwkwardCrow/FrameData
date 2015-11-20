//all in one schema option, not the best idea but w/e...

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function(mongoose){
  var Games = new mongoose.Schema({
    name : String,
    version : String,
    systems: [String],
    releaseDate : Date,
    characters : [{type : mongoose.Schema.ObjectId, ref: 'characters'}]
  });

  var Characters = new mongoose.Schema({
    name : String,
    health : Number
    game : {type : mongoose.Schema.ObjectId, ref: 'games'}
    moves : [{type : mongoose.Schema.ObjectId, ref: 'moves'}]
  });

  var Moves = new mongoose.Schema({
    name : String,
    damage : Number
    startup : Number,
    active : Number,
    recovery : Number,
    blockAdv : Number,
    hitAdv : Number
  });
  var models = {
    Games : mongoose.model('Games', Games),
    Characters : mongoose.model('Characters', Characters),
    Moves : mongoose.model('Moves', Moves)
  };

  return models;
}
