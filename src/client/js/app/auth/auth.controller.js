(function () {
  angular.module('gStudy')
    .controller('authCtrl', authCtrl);

  authCtrl.$inject = ['$location', 'authService'];

  function authCtrl($location, authService) {
    var vm = this;

    var initialUser = {
    username: '',
    password: ''
    }

    vm.user = {}
    vm.error = false;

    vm.register = function (user) {
      return authService.register(user)
      .then(function (result) {
        if (result.status === 500) {
          vm.error = true;
        }
        $location.path('/users/' + result.data[0]);
        vm.user = initialUser;
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
