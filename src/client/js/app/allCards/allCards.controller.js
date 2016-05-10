(function () {
  angular.module('gStudy')
    .controller('allCardsCtrl', allCardsCtrl);

  allCardsCtrl.$inject = ['allCardsService'];

  function allCardsCtrl(allCardsService) {
    var vm = this;

    vm.allCards = [];
    allCardsService.getCards()
    .then(function (result) {
      vm.allCards = result.data.cards;
    })
    .catch(function (err) {
      console.log('err', err);
    });
  }
})();
