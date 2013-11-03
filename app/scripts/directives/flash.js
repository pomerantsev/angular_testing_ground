'use strict';

angular.module('yoExampleApp')
  .directive('flash', function () {
    return {
      restrict: 'A',
      link: function() {
        alert("I'm working faster!");
      }
    };
  });
