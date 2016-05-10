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
      return authService.login(user)
      .then(function (result) {
        if (result.data.length < 1) {
          vm.error = true;
        } else if (result.data[0].password !== user.password) {
          vm.error = true;
        } else {
          $location.path('/users/' + result.data[0].id);
          vm.user = initialUser;
        }
      });
    }

  }
})();
