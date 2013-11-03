'use strict';

angular.module('yoExampleApp')
  .directive('leave13', function () {
    return function(scope, element, attrs) {
      element.bind("mouseleave", function() {
        element.removeClass(attrs.enter13);
      });
    };
  });
