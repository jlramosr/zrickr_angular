'use strict';

angular.module('zrickrApp')
  .controller('zrickersCtrl', function($scope, dataService) {

    dataService.getZrickrs(
      function(response) {
        console.log(response.data);
        $scope.zrickers = response.data;
      },
      function(response) {
        console.log('error', response.data);
      }
    );

    $scope.addZrickr = function() {
      var zrickr = { "name": "war-planes",
                      "brand": "airbus" };
      dataService.insertZrickr(zrickr,
        function(response) {
          console.log(response.data);
          $scope.zrickers.unshift(response.data);
          console.log($scope.zrickers);
        },
        function(response) {
          console.log('error',response.data);
        }
      );
    }

    /*$scope.saveZrickrs = function() {
      var filteredZrickrs = $scope.zrickers.filter(function(zrickr) {
        if (zrickr.edited) {
          zrickr.edited = false;
          return zrickr;
        }
      });
      dataService.saveZrickrs(filteredZrickrs,
        function(response) {
          console.log(response.data);

        },
        function(response) {
          console.log('error',response.data);
        }
      );
    };*/

    $scope.deleteZrickr = function(zrickr, index) {
      dataService.deleteZrickr(zrickr,
        function(response) {
          console.log(response.data);
          $scope.zrickers.splice(index, 1);
        },
        function(response) {
          console.log('error', response.data);
        }
      );
    };

  });
