'use strict';

describe('Controller: Second4Ctrl', function () {

  // load the controller's module
  beforeEach(module('yoExampleApp'));

  var Second4Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Second4Ctrl = $controller('Second4Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
