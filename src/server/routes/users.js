var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

router.get('/:userID', function (req, res, next) {
  return queries.getUserAndDeckNames(req.params.userID)
  .then(function (result) {
    res.status(200).json(result);
  });
});

router.post('/new', function (req, res, next) {
  return queries.createUser(req.body)
  .then(function (result) {
    res.status(200).json(result);
  });
});

module.exports = router;
