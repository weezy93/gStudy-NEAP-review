var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

function Users() {
  return knex('users');
}

function Decks() {
  return knex('decks');
}

function Cards() {
  return knex('cards');
}

router.get('/:id', function (req, res, next) {
  return queries.getUserAndDeckNames(req.params.id)
  .then(function (result) {
    res.json(result)
  });
});

router.post('/new', function (req, res, next) {
  return queries.createUser(req.body)
  .then(function (result) {
    res.json(result);
  });
});

module.exports = router;
