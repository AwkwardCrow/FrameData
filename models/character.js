// framedata/models/character.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function Character(name, game, health){
  this.name = name;
  this.health = health;
  this.game = game;
  this.moves = [];
}

Character.prototype = {
  //fill in any global functions for characterr
  addMove: function(move){
    this.moves.push(move);
  },
};


function Move(name, damage, meterGain, hitLevel, cancelAbility, startup, active, recovery, advOnBlock, advOnHit){
  this.name = name;
  this.damage = damage;
  this.meterGain = meterGain;
  this.hitLevel = hitLevel;
  this.cancelAbility = cancelAbility;
  this.startup = startup;
  this.active = active;
  this.recovery = recover;
  this.advOnBlock = advOnBlock;
  this.advOnHit = advOnHit
}

function getCharacter(name, game){
  //searchDB or JSON data for character based on name/game

}

var CharacterSchema = new Schema (new Character("","",""));
module.exports = mongoose.model('Character', CharacterSchema);


/*var BearSchema   = new Schema({
    name: String
});*/

//module.exports = mongoose.model('Bear', BearSchema);
