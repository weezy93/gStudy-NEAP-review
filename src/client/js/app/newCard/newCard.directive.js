(function () {
  angular.module('gStudy')
    .directive('newCard', newCard);

  newCard.$inject = ['newCardService'];

  function newCard(newCardService) {
    return {
      restrict: 'E',
      templateUrl: 'js/app/newCard/newCard.template.html',
      controller: 'newCardCtrl',
      controllerAs: 'vm'
    }
  };
})();
