'use strict';

describe('Controller: DrinkCtrl', function () {

  // load the controller's module
  beforeEach(module('yoExampleApp'));

  var DrinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrinkCtrl = $controller('DrinkCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
