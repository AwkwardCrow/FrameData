//pull in the code-behind js file of character which will contain the actual logic
//pull
var game = require('./gameHandler');
var express = require('express');
var router = express.Router();
router.get('/games', game.getAll);
router.post('/games', game.add);
router.get('/games/:game_name', game.get);
router.put('/games/:game_name', game.update);
router.delete('/games/:game_name', game.delete);

module.exports = function(app){
  app.use(router);
}
