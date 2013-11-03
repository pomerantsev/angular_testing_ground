'use strict';

angular.module('yoExampleApp')
  .directive('superman11', function () {
    return {
      restrict: 'A',
      link: function() {
        alert("I'm working stronger!");
      }
    };
  });
