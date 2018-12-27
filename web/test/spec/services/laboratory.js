'use strict';

describe('Service: laboratory', function () {

  // load the service's module
  beforeEach(module('testApp'));

  // instantiate service
  var laboratory;
  beforeEach(inject(function (_laboratory_) {
    laboratory = _laboratory_;
  }));

  it('should do something', function () {
    expect(!!laboratory).toBe(true);
  });

});
