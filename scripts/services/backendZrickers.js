'use strict';

angular.module('zrickrApp')
  .service('backendZrickers', function($http) {

    var apiUrl = "http://localhost:3000/api/zrickers/";

    this.getZrickers = function(collection, successCb, errorCb) {
      $http.get(apiUrl + collection.slug).then(successCb, errorCb);
    };

    this.insertZrickr = function(successCb, errorCb) {
      $http.post(apiUrl).then(successCb, errorCb);
    };

    /*this.saveCollections = function(films, successCb, errorCb) {
      for (var i=0; i < films.length; i++) {
        var change = {title: films[i].title};
        $http.put(apiUrl + films[i]._id, change).then(successCb, errorCb);
      }
    };*/

    this.deleteCollection = function(collection, successCb, errorCb) {
      $http.delete(apiUrl + collection.slug).then(successCb, errorCb);
    };
  });
