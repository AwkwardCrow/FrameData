var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Moves = new Schema({
  character : {type : mongoose.Schema.ObjectId, ref: 'characters'},
  name : String,
  damage : Number,
  startup : Number,
  active : Number,
  recovery : Number,
  blockAdv : Number,
  hitAdv : Number
});


module.exports = mongoose.model('Moves', Moves);
