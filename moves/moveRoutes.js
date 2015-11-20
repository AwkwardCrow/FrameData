//pull in the code-behind js file of character which will contain the actual logic
//pull
var move = require('./moveHandler');
var express = require('express');
var router = express.Router();
router.get('/moves', move.getAll);
router.post('/moves', move.add);
router.get('/moves/:move_name', move.get);
router.put('/moves/:move_name', move.update);
router.delete('/moves/:move_name', move.delete);

module.exports = function(app){
  app.use(router);
}
