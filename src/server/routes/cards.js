var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

router.post('/:id/new', function(req, res, next) {
  return queries.createCard(req.body)
  .then(function (result) {
    res.status(200).json(result);
  });
});

module.exports = router;
