(function () {
  angular.module('gStudy')
    .service('newDeckService', newDeckService);

    newDeckService.$inject = ['$stateParams', 'crudService'];

    function newDeckService($stateParams, crudService) {
      var userID = $stateParams.userID;

      return {
        createDeck: function (deck) {
          return crudService.addOne('decks/' + userID + '/new', deck)
          .then(function (result) {
            return result.data;
          })
          .catch(function (err) {
            console.log('err', err);
          });
        }
      };
    };
})();
