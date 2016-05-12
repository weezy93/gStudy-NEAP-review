(function () {
  angular.module('gStudy')
    .service('playGameService', playGameService);

  playGameService.$inject = ['$stateParams', 'crudService'];

  function playGameService($stateParams, crudService) {
    var deckID = $stateParams.deckID;

    return {
      getCurrentDeck: function () {
        return crudService.getOne('decks/deck/' + deckID)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          return err;
        });
      },
      getAllCards: function (deckID) {
        return crudService.getAll('cards/' + deckID)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          return err;
        });
      },
      changeScore: function (id, params) {
        return crudService.updateOne('cards/' + id, params)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          return err;
        });
      }
    }

  }
})();
