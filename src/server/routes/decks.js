var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

router.get('/:deckID', function(req, res, next) {
  return queries.getDeckAndCardsByDeckID(req.params.deckID)
  .then(function (result) {
    res.status(200).send(result);
  });
});

router.post('/:userID/new', function (req, res, next) {
  var params = {
    name: req.body.name,
    description: req.body.description,
    user_id: req.params.userID
  }
  return queries.createDeck(params)
  .then(function (result) {
    res.status(200).send(result);
  });
});

module.exports = router;
