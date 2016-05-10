(function () {
  angular.module('gStudy')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$stateParams', 'crudService'];

  function profileCtrl($stateParams, crudService) {
    var vm = this;
    var userID = $stateParams.userID;
    console.log('url params', $stateParams);
    vm.allDecks = [];

    crudService.getAll('decks/' + userID)
    .then(function (decks) {
      console.log(decks.data);
      vm.allDecks = decks.data;
    });
  }
})();
