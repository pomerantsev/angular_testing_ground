'use strict';

describe('Service: Avengers', function () {

  // load the service's module
  beforeEach(module('yoExampleApp'));

  // instantiate service
  var Avengers;
  beforeEach(inject(function (_Avengers_) {
    Avengers = _Avengers_;
  }));

  it('should do something', function () {
    expect(!!Avengers).toBe(true);
  });

});
