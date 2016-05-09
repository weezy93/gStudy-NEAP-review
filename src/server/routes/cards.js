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


router.post('/new', createCard)

module.exports = router;

// *** functions *** //

function createCard(req, res, next) {

}
