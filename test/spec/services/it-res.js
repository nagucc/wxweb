'use strict';

describe('Service: itRes', function () {

  // load the service's module
  beforeEach(module('wxwebApp'));

  // instantiate service
  var itRes;
  beforeEach(inject(function (_itRes_) {
    itRes = _itRes_;
  }));

  it('should do something', function () {
    expect(!!itRes).toBe(true);
  });

});
