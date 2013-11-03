'use strict';

angular.module('yoExampleApp')
  .directive('leave', function () {
    return function(scope, element) {
      element.bind("mouseleave", function() {
        console.log("I'm leaving on a jet plane!");
      });
    };
  });
