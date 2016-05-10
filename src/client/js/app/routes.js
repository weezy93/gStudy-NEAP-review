(function () {
  angular.module('gStudy')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })
    .state('dashboard', {
      url:'/dashboard',
      templateUrl: 'partials/dashboard.html'
    })
    .state('register', {
      url:'/register',
      templateUrl: 'partials/register.html'
    })
    .state('login', {
      url:'/login',
      templateUrl: 'partials/login.html'
    })
    .state('profile', {
      url:'/users/:userID',
      templateUrl: 'partials/profile.html'
    })
    .state('profile.createDeck', {
      url: '/createDeck',
      templateUrl: 'partials/createDeck.html'
    })
    .state('deck', {
      url:'/decks/:deckID',
      templateUrl: 'partials/createCard.html',
      controller: 'newCardCtrl',
      controllerAs: 'vm'
    })
    .state('deck.allCards', {
      url:'/allCards',
      templateUrl: 'partials/allCards.html'
    })
    .state('deck.newcard', {
      url:'/createCard',
      templateUrl: 'partials/newCard.html'
    });
  });
})();
