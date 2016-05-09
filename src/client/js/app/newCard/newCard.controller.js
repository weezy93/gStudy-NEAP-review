(function () {
  angular.module('gStudy')
    .controller('newCardCtrl', newCardCtrl);

  newCardCtrl.$inject = ['$scope', 'newCardService'];

  function newCardCtrl($scope, newCardService) {
    var vm = this;

    vm.deck;
    newCardService.getCurrentDeck()
    .then(function (result) {
      console.log('current deck', result);
    });

    var initialDeck = {
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
