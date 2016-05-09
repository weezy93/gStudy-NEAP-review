(function () {
  angular.module('gStudy')
    .directive('newDeck', newDeck);

    newDeck.$inject = ['newDeckService'];

    function newDeck(newDeckService) {
      return {
        restrict: 'E',
        templateUrl: 'js/app/newDeck/newDeck.template.html',
        controller: 'newDeckCtrl',
        controllerAs: 'vm'
      }
    };
})();
