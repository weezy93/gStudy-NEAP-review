(function () {
  angular.module('gStudy')
    .controller('playGameCtrl', playGameCtrl);

  playGameCtrl.$inject = ['$scope', '$stateParams', 'playGameService'];

  function playGameCtrl($scope, $stateParams, playGameService) {
    var vm = this;

    vm.allCards = [];
    vm.cardsConfident = [];

    vm.clicked = false;

    playGameService.getAllCards($stateParams.deckID)
    .then(function (result) {
      vm.allCards = result.data.cards;
      return result.data.cards;
    })
    .then(function (cards) {
      cards.every(function (obj) {
        if (obj.score === 1) {
          vm.cardsConfident.push(obj);
        }
        return vm.cardsConfident;
      });
    });

    vm.index = 0;

    vm.showAnswer = function () {
      vm.clicked = true;
    }

    function nextCard() {
      return ++vm.index;
    }

    vm.confident = function (card) {
      playGameService.changeScore(card.id, {score: 1})
      .then(function () {
        nextCard();
      });
    }

    vm.notConfident = function (card) {
      playGameService.changeScore(card.id, {score: 0})
      .then(function () {
        nextCard();
      });
    }

  }
})();
