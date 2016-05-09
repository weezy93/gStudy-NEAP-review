var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../../../db/knex');

function Users() {
  return knex('users');
}

function Decks() {
  return knex('decks');
}

function Cards() {
  return knex('cards');
}


router.get('/:id', getUserAndDeckNames);
router.post('/new', createUser);

module.exports = router;


// *** functions *** //

// for user page, gets names of all decks by user id
function getUserAndDeckNames(req, res, next) {
  return Users().join('decks', req.params.id, '=', 'decks.user_id')
  .select('users.username', 'decks.name');
}

// post to users
function createUser(req, res, next) {
  return Users().insert(req.body).returning('id');
}
