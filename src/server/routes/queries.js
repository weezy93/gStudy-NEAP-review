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

module.exports = {
  getUserAndDeckNames: function (userID) {
    return Users().where('id', userID)
    .then(function (user) {
      return Decks().where('user_id', userID)
      .then(function (decks) {
        return {user: user[0], decks: decks};
      });
    });
  },
  getDecksByUserID: function (userID) {
    return Decks().where('user_id', userID);
  },
  createUser: function (params) {
    return Users().insert(params).returning('id')
    .then(function (id) {
      return id;
    });
  },
  getDeckAndCardsByDeckID: function (deckID) {
    return Decks().where('id', deckID)
    .then(function (deck) {
      return Cards().where('deck_id', deckID)
      .then(function (result) {
        return {deck: deck, cards: result};
      });
    });
  },
  createDeck: function (params) {
    return Decks().insert(params).returning('id');
  },
  createCard: function (params) {
    return Cards().insert(params).returning('id');
  }
}
