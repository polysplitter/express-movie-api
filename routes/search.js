const express = require('express')
const router = express.Router()

// /search/...
router.get('/', function(req, res, next) {
  res.json('test search')
});

module.exports = router