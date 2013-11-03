'use strict';

describe('Directive: enter14', function () {

  // load the directive's module
  beforeEach(module('yoExampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    // element = angular.element('<enter14></enter14>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the enter14 directive');
  }));
});
