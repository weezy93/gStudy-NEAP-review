(function () {
  angular.module('gStudy')
    .controller('allCardsCtrl', allCardsCtrl);

  allCardsCtrl.$inject = ['allCardsService']  ;

  function allCardsCtrl(allCardsService) {
    var vm = this;


  }
})();
