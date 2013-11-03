'use strict';

angular.module('yoExampleApp')
  .controller('First4Ctrl', function ($scope, Data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.data = Data;
  });
