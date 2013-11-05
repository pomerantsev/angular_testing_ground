'use strict';

angular.module('yoExampleApp')
  .directive('phone20', function() {
    return {
      restrict: "E",
      scope: {
        number: "@",
        network: "=",
        makeCall: "&"
      },
      template: '<div>Number: {{number}} Network:<select ng-model="network" ng-options="net for net in networks"</select>' +
                '<input type="text" ng-model="value">' +
                '<div class="btn btn-default" ng-click="makeCall({number: number, message: value})">Call home!</div></div>',
      link: function(scope) {
        scope.networks = ["Verizon", "AT&T", "Sprint"];
        scope.network = scope.networks[0];
      }
    };
  });