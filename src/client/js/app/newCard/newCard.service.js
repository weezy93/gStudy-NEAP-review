(function () {
  angular.module('gStudy')
    .service('newCardService', newCardService);

    newCardService.$inject = ['$stateParams', 'crudService']

  function newCardService($stateParams, crudService) {
    var deckID = $stateParams.deckID;

    return {
      createCard: function (card) {
        return crudService.addOne(deckID + '/new', card)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          console.log('err', err);
        });
      }
    }
  }
})();
