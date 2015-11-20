var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Characters = new Schema({
  name : String,
  health : Number,
  game : {type : mongoose.Schema.ObjectId, ref: 'games'},
  moves : [{type : mongoose.Schema.ObjectId, ref: 'moves'}]
});

module.exports = mongoose.model('Characters', Characters);
