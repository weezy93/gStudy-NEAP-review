(function () {
  angular.module('gStudy')
    .service('authService', authService);

  authService.$inject = ['$rootScope', 'crudService'];

  function authService($rootScope, crudService) {
    return {
      register: function (user) {

      },
      login: function (user) {

      },
      logout: function () {}
    };
  };
})();
