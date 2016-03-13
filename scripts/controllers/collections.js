'use strict';

angular.module('zrickrApp')
  .controller('collectionsCtrl', function($scope, backendCollections) {

    backendCollections.getCollections(
      function(response) {
        console.log(response.data);
        $scope.collections = response.data;
      },
      function(response) {
        console.log('error', response.data);
      }
    );

    $scope.addCollection = function() {
      var collection = { "name": "War Planes",
                         "fields": [
                           { "name": "brand", "type": "string", "required": true, "unique": true, "main": true },
                           { "name": "year", "type": "integer", "required": true, "unique": false },
                           { "name": "price", "type": "number" }
                         ]
                       };
      backendCollections.insertCollection(collection,
        function(response) {
          console.log(response.data);
          $scope.collections.unshift(response.data);
          console.log($scope.collections);
        },
        function(response) {
          console.log('error',response.data);
        }
      );
    }

    /*$scope.saveCollections = function() {
      var filteredCollections = $scope.collections.filter(function(collection) {
        if (collection.edited) {
          collection.edited = false;
          return collection;
        }
      });
      backendCollections.saveCollections(filteredCollections,
        function(response) {
          console.log(response.data);

        },
        function(response) {
          console.log('error',response.data);
        }
      );
    };*/

    $scope.deleteCollection = function(collection, index) {
      backendCollections.deleteCollection(collection,
        function(response) {
          console.log(response.data);
          $scope.collections.splice(index, 1);
        },
        function(response) {
          console.log('error', response.data);
        }
      );
    };

  });
