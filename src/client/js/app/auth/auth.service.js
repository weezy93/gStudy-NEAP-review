(function () {
  angular.module('gStudy')
    .service('authService', authService);

  authService.$inject = ['$rootScope', 'crudService'];

  function authService($rootScope, crudService) {
    return {
      register: function (user) {
        return crudService.addOne('users/new', user)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          return err;
        });

      },
      login: function (user) {
        return crudService.getOne('users/search/' + user.username)
        .then(function (result) {
          return result;
        })
        .catch(function (err) {
          return err;
        });
      },
      logout: function () {}
    };
  };
})();
