'use strict';

describe('Filter: reverse', function () {

  // load the filter's module
  beforeEach(module('yoExampleApp'));

  // initialize a new instance of the filter before each test
  var reverse;
  beforeEach(inject(function ($filter) {
    reverse = $filter('reverse');
  }));
  
  it('should reverse a string', function() {
    expect(reverse('ABCD')).toEqual('DCBA');
    expect(reverse('John')).toEqual('nhoJ');
  });
});
