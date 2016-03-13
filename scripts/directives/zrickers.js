angular.module('zrickrApp')
  .directive('zrickers', function() {
    return {
      templateUrl: 'templates/zrickers.html',
      controller: 'zrickersCtrl',
      replace: true
    }
  })
