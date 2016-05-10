(function () {
  angular.module('gStudy')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$stateParams', 'crudService'];

  function profileCtrl($stateParams, crudService) {
    var vm = this;
    var userID = $stateParams.userID;
    vm.allDecks = [];

    crudService.getAll('decks/' + userID)
    .then(function (decks) {
      vm.allDecks = decks.data;
    });
  }
})();
