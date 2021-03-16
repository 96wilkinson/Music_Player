var express = require('express');
var router = express.Router();

const getSongs = require('./getSongs')

router.get('/getSongs', function(req, res, next) {
    res.send(getSongs());
  });

module.exports = router;