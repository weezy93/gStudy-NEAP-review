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
            console.log('err', err);
          });
        },
      changeScore: function (card) {
        return crudService.updateOne(); // needs backend route built
      }
    }
  }
})();
