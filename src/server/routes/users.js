var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');
var queries = require('./queries.js');

// gets single user by id
router.get('/:userID', function (req, res, next) {
  return queries.getUserAndDeckNames(req.params.userID)
  .then(function (result) {
    res.status(200).send(result);
  })
  .catch(function (err) {
    res.status(500).send(err);
  });
});

//gets user by username
router.get('/login/:username', function (req, res, next) {
  return queries.getUserByUsername(req.params.username)
  .then(function (result) {
    res.status(200).send(result);
  })
  .catch(function (err) {
    res.status(500).send(err);
  });
});

// creates new user, via register
router.post('/new', function (req, res, next) {
  return queries.createUser(req.body)
  .then(function (result) {
    res.status(200).send(result);
  })
  .catch(function (err) {
    res.status(500).send(err);
  });
});

module.exports = router;
