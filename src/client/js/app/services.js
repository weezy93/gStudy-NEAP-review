(function () {
  'use strict';

  angular.module('gStudy')
    .service('crudService', ['$http', function ($http) {
      var url = 'http://localhost:3000/';
      return {
        getAll: function (resource) {
          return $http({
            method: 'GET',
            url: url + resource
          });
        },
        getOne: function (resource) {
          return $http({
            method: 'GET',
            url: url + resource
          });
        },
        addOne: function (resource, payload) {
          return $http.post(url + resource, payload);
        },
        updateOne: function (resource, payload) {
          return $http.put(url + resource, payload);
        },
        deleteOne: function (resource) {
          return $http.delete(url + resource);
        }
      }
    }]);
})();
