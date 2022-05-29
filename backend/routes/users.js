var express = require('express');
var User = require('../models/User');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const users = await User.find({}, 'email displayName')
  res.send(users);
});

/*router.post('/', async function(req, res, next) {
  
});*/

module.exports = router;
