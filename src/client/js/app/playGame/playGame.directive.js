(function () {
  angular.module('gStudy')
    .directive('playGame', playGame);

  playGame.$inject = ['playGameService'];

  function playGame(newCardService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/playGame/playGame.template.html',
      controller: 'playGameCtrl',
      controllerAs: 'vm'
    }
  };
})();
