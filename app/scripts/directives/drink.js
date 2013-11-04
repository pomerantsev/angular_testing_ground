'use strict';

angular.module('yoExampleApp')
  .directive('drink', function () {
    return {
      scope: {
        flavor: "@"
      },
      template: '<div>{{flavor}}</div>'
    };
  });
