const express = require('express')
const router = express.Router()

const movies = require('../data/movies')
const people = require('../data/people')

function queryRequired(req, res, next) {
  const searchTerm = req.query.query
  if(!searchTerm) {
    res.json({ msg: 'Query is required.' })
  } else {
    next()
  }
}

// this middle ware is used by all routes in this router.
router.use(queryRequired)

// /search/...
router.get('/', function(req, res, next) {
  res.json('test search')
});

// GET /search/movie
router.get('/movie', (req, res, next) => {
  const searchTerm = req.query.query
  const results = movies.filter((movie) => {
    found = movie.overview.toLowerCase().includes(searchTerm.toLowerCase()) 
      || movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    return found
  })

  res.json({results})
})

// GET /search/people
router.get('/people', (req, res, next) => {
  const searchTerm = req.query.query
  const results = people.filter((person) => {
    found = person.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    return found
  })

  res.json({results})
})

module.exports = router