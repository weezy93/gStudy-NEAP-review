(function () {
  angular.module('gStudy')
    .controller('authCtrl', authCtrl);

  authCtrl.$inject = ['authService'];

  function authCtrl(authService) {
    var vm = this;

    vm.initialUser = {
      username: '',
      password: ''
    }

  }
})();
