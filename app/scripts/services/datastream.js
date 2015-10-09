'use strict';

/**
 * @ngdoc service
 * @name iSquareWebApp.dataStream
 * @description
 * # dataStream
 * Factory in the iSquareWebApp.
 */
angular.module('iSquareWebApp')
  .factory('dataStream', function () {
    return {
      getDataStream: function(url) {
        var eventSource = new EventSource(url);
        console.log("eventSource: "+eventSource);
        var responseStream = Rx.Observable.create(function(observer) {
          // Get events from the server
          console.log("Get events from the server");
          eventSource.onmessage = function(e) {
            console.log("message: " + e.data);
            observer.onNext(e.data);
          };
        });
        return responseStream;
      }
    };
  });
