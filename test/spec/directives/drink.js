'use strict';

describe('Directive: drink', function () {

  // load the directive's module
  beforeEach(module('yoExampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<drink></drink>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the drink directive');
  // }));
});
