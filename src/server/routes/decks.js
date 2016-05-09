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

router.get('/:id', getCardsByDeckId);
router.post('/new', createDeck);

module.exports = router;

// ** functions ** //

// for single deck, gets all cards
function getCardsByDeckId(req, res, next) {
  return Cards().select('*').join('decks', req.params.id, '=', 'cards.deck_id');
}

// posts to decks with user id
function createDeck(req, res, next) {
  return Decks().insert(req.body);
}
