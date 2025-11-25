const express = require('express');
const router = express.Router();

// TODO view the latest request
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// TODO store latest request
router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
