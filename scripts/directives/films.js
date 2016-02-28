angular.module('zrickrApp')
  .directive('films', function() {
    return {
      templateUrl: 'templates/films.html',
      controller: 'mainCtrl',
      replace: true
    }
  })
