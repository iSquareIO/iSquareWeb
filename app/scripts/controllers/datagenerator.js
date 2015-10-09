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
      var data = this.data;
      var snapshot = {
        timestamp: new Date(),
        columns: data.map(function(c) {return c.city;}),
        data: [
          data.map(function(c) {return c.value;}),
          data.map(function(c) {return c.value > 90 ? 1 : 0;})
        ]
      };
      $http.post('datareceiver', snapshot);
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
