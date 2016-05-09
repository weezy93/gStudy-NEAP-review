(function () {
  angular.module('gStudy')
    .controller('newDeckCtrl', newDeckCtrl);

    newDeckCtrl.$inject = ['$scope', 'newDeckService'];

    function newDeckCtrl($scope, newDeckService) {
      var vm = this;

      var initialDeck = {
        user_id: '',
        name: '',
        description: ''
      }
      vm.deck = {};

      vm.createDeck = function (deck) {
        return newDeckService.createDeck(deck)
        .then(function (result) {
          console.log(result);
          vm.deck = initialDeck;
        })
        .catch(function (err) {
          console.log(err);
        });
      };
    }
})();
