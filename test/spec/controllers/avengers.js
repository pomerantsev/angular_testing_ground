'use strict';

describe('Controller: AvengersCtrl', function () {

  // load the controller's module
  beforeEach(module('yoExampleApp'));

  var AvengersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AvengersCtrl = $controller('AvengersCtrl', {
      $scope: scope
    });
  }));

});
