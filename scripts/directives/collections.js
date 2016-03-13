angular.module('zrickrApp')
  .directive('collections', function() {
    return {
      templateUrl: 'templates/collections.html',
      controller: 'collectionsCtrl',
      replace: true
    }
  })
