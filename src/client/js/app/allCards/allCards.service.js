(function () {
  angular.module('gStudy')
    .service('allCardsService', allCardsService);

  allCardsService.$inject = ['newCardService'];

  function allCardsService(newCardService) {
    vm.allCards = [];

    newCardService.getCurrentDeck()
    .then(function (result) {
      vm.allCards = result.data.cards;
    });
  }


})();
