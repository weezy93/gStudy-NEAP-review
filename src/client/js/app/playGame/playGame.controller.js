(function () {
  angular.module('gStudy')
    .controller('playGameCtrl', playGameCtrl);

  playGameCtrl.$inject = ['$scope', '$stateParams', 'playGameService'];

  function playGameCtrl($scope, $stateParams, playGameService) {
    var vm = this;

    vm.allCards = [];
    vm.clicked = false;

    playGameService.getAllCards($stateParams.deckID)
    .then(function (result) {
      vm.allCards = result.data.cards;
    });

    vm.index = 0;

    vm.showAnswer = function () {
      vm.clicked = true;
    }

    function nextCard() {
      // increment index
    }

    vm.confident = function (card) {
      playGameService.scoreUp
      .then(function () {
        nextCard();
      });
    }

  }
})();
