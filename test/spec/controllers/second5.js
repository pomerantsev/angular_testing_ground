'use strict';

describe('Controller: Second5Ctrl', function () {

  // load the controller's module
  beforeEach(module('yoExampleApp'));

  var Second5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Second5Ctrl = $controller('Second5Ctrl', {
      $scope: scope
    });
  }));

  it('should attach someValue to the scope', function () {
    expect(typeof scope.reversedMessage === 'function').toBeTruthy();
  });
});
