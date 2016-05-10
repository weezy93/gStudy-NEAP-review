(function () {
  angular.module('gStudy')
    .service('profileService', profileService);

  profileService.$inject = ['$stateParams', 'crudService'];

  function profileService($stateParams, crudService) {
    return {
      getUser: function () {
        return crudService.getOne('users/' + $stateParams.userID)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          return err;
        });
      },
      getAllDecks: function (userID) {
        return crudService.getAll('decks/' + userID)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          return err;
        });
      }
    };
  };

})();
