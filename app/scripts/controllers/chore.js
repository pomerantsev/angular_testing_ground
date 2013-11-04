'use strict';

angular.module('yoExampleApp')
  .controller('ChoreCtrl', function ($scope) {
    $scope.logChore = function(chore) {
      alert(chore + " is done!");
    };
  });
