var express = require('express');
var Container = require('../models/Container');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const containers = await Container.find()
  res.send(containers);
});

/*router.post('/', async function(req, res, next) {
  
});*/

module.exports = router;
