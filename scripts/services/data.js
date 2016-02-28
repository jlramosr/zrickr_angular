'use strict';

angular.module('zrickrApp')
  .service('dataService', function($http) {

    //apiUrl = 'mock/films.json'
    var apiUrl = "http://localhost:3000/api/films/";

    this.getFilms = function(successCb, errorCb) {
      $http.get(apiUrl).then(successCb, errorCb);
    };

    this.insertFilm = function(film, successCb, errorCb) {
      $http.post(apiUrl, film).then(successCb, errorCb);
    };

    this.saveFilms = function(films, successCb, errorCb) {
      for (var i=0; i < films.length; i++) {
        var change = {title: films[i].title};
        $http.put(apiUrl + films[i]._id, change).then(successCb, errorCb);
      }
    };

    this.deleteFilm = function(film, successCb, errorCb) {
      $http.delete(apiUrl + film._id).then(successCb, errorCb);
    };
  });
