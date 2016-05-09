(function () {
  angular.module('gStudy')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })
    .state('dashboard', {
      url:'/dashboard',
      templateUrl: 'partials/dashboard.html'
    });
  });
})();
