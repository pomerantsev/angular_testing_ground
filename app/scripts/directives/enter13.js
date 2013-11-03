'use strict';

angular.module('yoExampleApp')
  .directive('enter13', function () {
    return function(scope, element, attrs) {
      element.bind("mouseenter", function() {
        element.addClass(attrs.enter13);
      });
    };
  });
