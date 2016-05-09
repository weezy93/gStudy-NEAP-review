var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

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
    res.status(200).json(result);
  });
});

module.exports = router;
