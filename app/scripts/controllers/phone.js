'use strict';

angular.module('yoExampleApp')
  .controller('PhoneCtrl', function ($scope) {
    $scope.callHome = function(message) {
      alert(message);
    };
  });
