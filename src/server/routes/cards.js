var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

// get all cards with deck id
router.get('/:deckID', function (req, res, next) {
  return queries.getDeckAndCardsByDeckID(req.params.deckID)
  .then(function (result) {
    res.status(200).send(result);
  })
  .catch(function (err) {
    res.status(500).send(result);
  });
});

// create new card with deck id
router.post('/:deckID/new', function(req, res, next) {
  var params = {
    deck_id: req.params.deckID,
    question: req.body.question,
    answer: req.body.answer,
    score: req.body.score,
    question_image: req.body.question_image,
    answer_image: req.body.answer_image
  }

  return queries.createCard(params)
  .then(function (result) {
    res.status(200).send(result);
  });
});

module.exports = router;
