var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

router.get('/:id', function(req, res, next) {
  return queries.getCardsByDeckId(req.params.id)
  .then(function (result) {
    res.status(200).json(result);
  });
});

router.post('/new', function (req, res, next) {
  return queries.createDeck(req.body)
  .then(function (result) {
    res.status(200).json(result);
  });
});

module.exports = router;
