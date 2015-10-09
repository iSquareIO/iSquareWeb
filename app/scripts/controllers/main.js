'use strict';

/**
 * @ngdoc function
 * @name iSquareWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iSquareWebApp
 */
angular.module('iSquareWebApp')
  .controller('MainCtrl', ['dataStream', function (dataStream) {

    var stream = dataStream.getDataStream('sse');
    stream.subscribe(function(dataSnapshot) {
      console.log("dataSnapshot: ");
      console.log(dataSnapshot);
      console.log(JSON.stringify(dataSnapshot));
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
