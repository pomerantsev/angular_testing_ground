'use strict';

describe('Controller: First4Ctrl', function () {

  // load the controller's module
  beforeEach(module('yoExampleApp'));

  var First4Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    First4Ctrl = $controller('First4Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
