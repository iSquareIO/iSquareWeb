'use strict';

/**
 * @ngdoc function
 * @name iSquareWebApp.controller:DatageneratorCtrl
 * @description
 * # DatageneratorCtrl
 * Controller of the iSquareWebApp
 */
angular.module('iSquareWebApp')
  .controller('DatageneratorCtrl', ['$http', function ($http) {
    this.cities = ['Toronto', 'Daly City', 'Paris', 'Munich', 'Sydney'];

    this.data = this.cities.map(function(city) {
      return {
        city: city,
        value: 0
      };
    });

    this.changed = function() {
      console.log("Data is changed");
      $http.post('datareceiver', this.data);
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
