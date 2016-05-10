(function () {
  angular.module('gStudy')
    .controller('authCtrl', authCtrl);

  authCtrl.$inject = ['authService'];

  function authCtrl(authService) {
    var vm = this;

    console.log('auth controller');

  vm.initialUser = {
    username: '',
    password: ''
  }

  vm.user = {}

  vm.register = function (user) {
    console.log(user);
    return authService.register(user)
    .then(function (result) {
      console.log(result);
    });
  }

  vm.login = function (user) {
    console.log(user);
    return authService.login(user)
    .then(function (result) {
      console.log(result);
    });
  }



  }
})();
