const express = require("express");
const router = express.Router();

const movieDetails = require("../data/movieDetails");

router.param(('movieId'), (req, res, next) => {
    // update the db with analytics data
    console.log("Someone hit a route that used the movieId wildcard!")
    next()
})

// /movie/...

// GET /movie/top_rated
router.get('/top_rated', (req, res, next) => {
    let page = req.query.page
    if (page === undefined) { page = 1 }
    const result = movieDetails.sort((a, b) => {
        return b.vote_average - a.vote_average
    })
    const indexToStart = (page - 1) * 20
    res.json(result.slice(indexToStart, indexToStart + 19))
})

// GET /movie/movieId
router.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId;
    const results = movieDetails.find(movie => {
      return movie.id == movieId;
    });
  
    if (!results) {
      res.json({
          msg: "Movie ID is not found.",
          production_companies: []
      })
    } else {
      res.json(results);
    }
  });

// POST /movie/{movie_id}/rating

// DELETE /movie/{movie_id}/rating

module.exports = router;
