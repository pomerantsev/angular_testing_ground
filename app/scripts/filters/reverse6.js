'use strict';

angular.module('yoExampleApp')
  .filter('reverse6', function (Data) {
    return function (input) {
      return input.split('').reverse().join('') + Data.message;
    };
  });
