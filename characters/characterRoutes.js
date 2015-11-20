//pull in the code-behind js file of character which will contain the actual logic
//pull
var character = require('./characterHandler');
var express = require('express');
var router = express.Router();
router.get('/characters', character.getAll);
router.post('/characters', character.add);
router.get('/characters/:character_name', character.get);
router.put('/characters/:character_name', character.update);
router.delete('/characters/:character_name', character.delete);

module.exports = function(app){
  app.use(router);
}
