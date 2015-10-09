'use strict';

describe('Service: dataStream', function () {

  // load the service's module
  beforeEach(module('iSquareWebApp'));

  // instantiate service
  var dataStream;
  beforeEach(inject(function (_dataStream_) {
    dataStream = _dataStream_;
  }));

  it('should do something', function () {
    expect(!!dataStream).toBe(true);
  });

});
