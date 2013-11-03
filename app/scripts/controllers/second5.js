'use strict';

angular.module('yoExampleApp')
  .controller('Second5Ctrl', function ($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function(message) {
      return message.split("").reverse().join("");
    };
  });
