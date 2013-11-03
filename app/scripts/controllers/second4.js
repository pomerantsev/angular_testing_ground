'use strict';

angular.module('yoExampleApp')
  .controller('Second4Ctrl', function ($scope, Data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.data = Data;
  });
