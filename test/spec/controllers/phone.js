'use strict';

describe('Controller: PhoneCtrl', function () {

  // load the controller's module
  beforeEach(module('yoExampleApp'));

  var PhoneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneCtrl = $controller('PhoneCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
