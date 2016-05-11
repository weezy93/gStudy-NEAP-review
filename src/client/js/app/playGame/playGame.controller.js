(function () {
  angular.module('gStudy')
    .controller('playGameCtrl', playGameCtrl);

  playGameCtrl.$inject = ['$scope', '$stateParams', 'playGameService'];

  function playGameCtrl($scope, $stateParams, playGameService) {
    var vm = this;

    vm.allCards = [];
    playGameService.getAllCards($stateParams.deckID)
    .then(function (result) {
      vm.allCards = result.data.cards;
    });

    vm.index = 0;

  }
})();
