'use strict';

angular.module('yoExampleApp')
  .directive('enter14', function () {
    return function postLink(scope, element, attrs) {
      element.bind("mouseenter", function() {
        scope.$apply(attrs.enter14);
      })
    };
  });
