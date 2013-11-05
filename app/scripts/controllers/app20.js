'use strict';

angular.module('yoExampleApp')
  .controller('App20Ctrl', function ($scope) {
    $scope.leaveVoicemail = function(number, message) {
      alert("Number: " + number + " said: " + message)
    };
  });
