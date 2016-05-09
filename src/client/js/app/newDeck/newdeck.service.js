(function () {
  angular.module('gStudy')
    .service('newDeckService', newDeckService);

    newDeckService.$inject = ['$stateParams', 'crudService']

    function newDeckService($stateParams, crudService) {
      var userID = $stateParams.userID;
      console.log($stateParams);

      return {
        createDeck: function (deck) {
          return crudService.addOne('decks/' + userID + '/new', deck)
          .then(function (result) {
            return result;
          })
          .catch(function (err) {
            console.log('err', err);
          });
        }
      };
    };

})();
