(function () {
  angular.module('gStudy')
    .service('authService', authService);

  authService.$inject = ['$rootScope', 'crudService'];

  function authService($rootScope, crudService) {
    return {
      register: function (user) {
        return crudService.addOne('users/new', user)
        .then(function (result) {
          console.log(result);
          return result;
        })
        .catch(function (err) {
          console.log('err', err);
        });

      },
      login: function (user) {

      },
      logout: function () {}
    };
  };
})();
