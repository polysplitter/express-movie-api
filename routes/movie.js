const express = require('express')
const router = express.Router()

// /movie/...
router.get('/', function(req, res, next) {
  res.json('test movie')
});

module.exports = router