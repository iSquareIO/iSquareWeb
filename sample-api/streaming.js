function DataStream() {
  var randomGenerator = function() {
    return Math.floor(Math.random() * 100 + 1);
  }
  return {
    getMeta: function() {},
    getLastSnapshot: function() {},
    getDataStream: function() {
      var responseStream = Rx.Observable.create(function(observer) {
        var cnt = 0;
        setInterval(function() {
          cnt++;
          var dataSnapshotSample = {
            timestamp: new Date(),
            columns: ['Toronto', 'New York', 'Kiev'],
            data: [
              [randomGenerator(), randomGenerator(), randomGenerator()],
              [0, 2, 0]
            ]
          };
          observer.onNext(dataSnapshotSample);
        }, 2000);
      });
      return responseStream;
    }
  }
}

var metaDataSample = {
  columnsMap: {
    'Toronto': 0,
    'New York': 1,
    'Kiev': 2
  }
};

var dataSnapshotSample = {
  timestamp: new Date(),
  columns: ['Toronto', 'New York', 'Kiev'],
  data: [
    [10, 20, 30],
    [0, 2, 0]
  ]
};


// Usage sample

function usageSample() {
  var dataStream = new DataStream();
  var stream = dataStream.getDataStream();
  stream.subscribe(function(dataSnapshot) {
    console.log("dataSnapshot: ");
    console.log(dataSnapshot);
  });
}

usageSample();