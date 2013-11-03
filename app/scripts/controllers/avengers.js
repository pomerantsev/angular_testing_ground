'use strict';

angular.module('yoExampleApp')
  .controller('AvengersCtrl', function ($scope, Avengers) {
    $scope.avengers = Avengers;
  });
