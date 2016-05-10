(function () {
  angular.module('gStudy')
    .controller('newCardCtrl', newCardCtrl);

  newCardCtrl.$inject = ['$scope', 'newCardService'];

  function newCardCtrl($scope, newCardService) {
    var vm = this;

    vm.deckName = '';
    newCardService.getCurrentDeck()
    .then(function (result) {
      vm.deckName = result.data.deck[0].name;
    });

    var initialCard = {
      deck_id: '',
      question: '',
      answer: '',
      question_image: '',
      answer_image: ''
    }

    vm.createCard = function (card) {
      return newCardService.createCard(card)
      .then(function (result) {
        vm.card = initialCard;
      })
      .catch(function (err) {
        console.log('err');
      })
    }
  }
})();
