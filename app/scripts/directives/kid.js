'use strict';

angular.module('yoExampleApp')
  .directive('kid', function () {
    return {
      restrict: "E",
      scope: {
        done: "&"
      },
      template: "<input type='text' ng-model='chore'>" +
                " {{chore}}" +
                " <div class='btn btn-default' ng-click='done({chore:chore})'>I\'m done!</div>"
    };
  });
