var character = require('../framedata/models/character');
var express = require('express');
var router = express.Router();
router.get('/characters', character.getAll);
router.post('/characters', character.add);
router.get('/characters/:character_id', character.get);
router.put('/characters/:character_id', character.update);
router.delete('/characters/:character_id', character.delete);

modules.exports(app){
  app.use(router);
}
