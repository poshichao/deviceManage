'use strict';

describe('Service: device', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var device;
  beforeEach(inject(function (_device_) {
    device = _device_;
  }));

  it('should do something', function () {
    expect(!!device).toBe(true);
  });

});
