'use strict';

angular.module('yoExampleApp')
  .filter('reverse', function () {
    return function (input) {
      return input.split('').reverse().join('');
    };
  });
