var knex = require('../../../db/knex');

function Users() {
  return knex('users');
}

function Decks() {
  return knex('decks');
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
  createUser: function (params) {
    console.log(params);
    return Users().insert(params).returning('id')
    .then(function (id) {
      return id;
    });
  }
}
