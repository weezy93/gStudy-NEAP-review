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
      templateUrl: 'partials/register.html',
      controller: 'authCtrl',
      controllerAs: 'vm'
    })
    .state('login', {
      url:'/login',
      templateUrl: 'partials/login.html',
      controller: 'authCtrl',
      controllerAs: 'vm'
    })
    .state('profile', {
      url:'/users/:userID',
      templateUrl: 'partials/profile.html'
    })
    .state('profile.allDecks', {
      url: '/allDecks',
      templateUrl: 'partials/allDecks.html',
      controller: 'profileCtrl',
      controllerAs: 'vm'
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
    .state('deck.newCard', {
      url:'/createCard',
      templateUrl: 'partials/newCard.html'
    })
    .state('deck.play', {
      url: '/play',
      templateUrl: 'partials/playGame.html',
      controller: 'playGameCtrl',
      controllerAs: 'vm'
    });
  });
})();
