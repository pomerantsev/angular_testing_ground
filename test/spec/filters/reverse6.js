'use strict';

describe('Filter: reverse6', function () {

  // load the filter's module
  beforeEach(module('yoExampleApp'));

  // initialize a new instance of the filter before each test
  var reverse6;
  beforeEach(inject(function ($filter) {
    reverse6 = $filter('reverse6');
  }));

  // it('should return the input prefixed with "reverse6 filter:"', function () {
  //   var text = 'angularjs';
  //   expect(reverse6(text)).toBe('reverse6 filter: ' + text);
  // });

});
