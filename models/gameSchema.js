var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Games = new Schema({
  name : String,
  version : String,
  system : String,
  releaseDate : Date,
  characters : [{type : mongoose.Schema.ObjectId, ref: 'characters'}]
});

Games.index({ name: 1, system : 1}, {unique : true});
module.exports = mongoose.model('Games', Games);
