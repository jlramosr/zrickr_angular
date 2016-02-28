'use strict';

angular.module('zrickrApp')
  .controller('mainCtrl', function($scope, dataService) {

    dataService.getFilms(
      function(response) {
        console.log(response.data);
        $scope.films = response.data;
      },
      function(response) {
        console.log('error', response.data);
      }
    );

    $scope.addFilm = function() {
      var film = {title: "Titan4", year: 1231};
      dataService.insertFilm(film,
        function(response) {
          console.log(response.data);
          $scope.films.unshift(response.data);
          console.log($scope.films);
        },
        function(response) {
          console.log('error',response.data);
        }
      );
    }

    $scope.saveFilms = function() {
      var filteredFilms = $scope.films.filter(function(film) {
        if (film.edited) {
          film.edited = false;
          return film;
        }
      });
      dataService.saveFilms(filteredFilms,
        function(response) {
          console.log(response.data);

        },
        function(response) {
          console.log('error',response.data);
        }
      );
    };

    $scope.deleteFilm = function(film, index) {
      dataService.deleteFilm(film,
        function(response) {
          console.log(response.data);
          $scope.films.splice(index, 1);
        },
        function(response) {
          console.log('error', response.data);
        }
      );
    };

  });
