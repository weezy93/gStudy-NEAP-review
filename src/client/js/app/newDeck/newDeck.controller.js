(function () {
  angular.module('gStudy')
    .controller('newDeckCtrl', newDeckCtrl);

    newDeckCtrl.$inject = ['$scope', '$location', 'newDeckService'];

    function newDeckCtrl($scope, $location, newDeckService) {
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
          vm.deck = initialDeck;
          $location.path('/decks/' + result[0]);
        })
        .catch(function (err) {
          console.log(err);
        });
      };
    }
})();
