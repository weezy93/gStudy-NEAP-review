var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

// get all decks by user id
router.get('/:userID', function (req, res, next) {
  return queries.getDecksByUserID(req.params.userID)
  .then(function (result) {
    res.status(200).send(result);
  });
});

// single deck
router.get('/deck/:deckID', function(req, res, next) {
  console.log('here', req.params.deckID);
  return queries.getDeckAndCardsByDeckID(req.params.deckID)
  .then(function (result) {
    res.status(200).send(result);
  })
  .catch(function (err) {
    console.log(err);
    res.status(500).send(err);
  });
});

// new deck for user
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
