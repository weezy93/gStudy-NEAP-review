(function () {
  angular.module('gStudy')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$stateParams', 'profileService'];

  function profileCtrl($stateParams, profileService) {
    var vm = this;
    var userID = $stateParams.userID;

    vm.currentUser = {};


    vm.allDecks = [];

    profileService.getAllDecks(userID)
    .then(function (decks) {
      vm.allDecks = decks.data;
    });
  }
})();
