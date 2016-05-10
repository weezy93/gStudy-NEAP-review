(function () {
  angular.module('gStudy')
    .service('allCardsService', allCardsService);

  allCardsService.$inject = ['newCardService'];

  function allCardsService(newCardService) {
    return {
      getCards: function () {
        return newCardService.getCurrentDeck()
        .then(function (result) {
          return result;
        });
      }
    }
  }
})();
