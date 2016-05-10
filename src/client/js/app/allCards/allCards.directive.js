(function () {
  angular.module('gStudy')
    .directive('allCards', allCards);

  allCards.$inject = ['allCardsService', 'newCardService'];

  function allCards(allCardsService, newCardService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/allCards/allCards.template.html',
      controller: 'allCardsCtrl',
      controllerAs: 'vm'
    }
  };
})();
