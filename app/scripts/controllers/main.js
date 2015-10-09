'use strict';

/**
 * @ngdoc function
 * @name iSquareWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iSquareWebApp
 */
angular.module('iSquareWebApp')
  .controller('MainCtrl', ['dataStream', '$rootScope', function (dataStream, $rootScope) {

    var stream = dataStream.getDataStream('sse');
    var self = this;
    stream.subscribe(function(dataSnapshot) {
      console.log("dataSnapshot: ");
      console.log(dataSnapshot);
      console.log(JSON.stringify(dataSnapshot));
      $rootScope.$apply(function() {
        var data = JSON.parse(dataSnapshot);
        var table = [];
        for(var i=0; i<data.columns.length; i++) {
          table.push({
            city: data.columns[i],
            value: data.data[0][i],
            alert: data.data[1][i]
          });
        }
        self.table = table;
        self.data = data;
      });
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
