'use strict';

angular.module('yoExampleApp')
  .directive('superman', function () {
    return {
      template: '<div>Here I am to save the day</div>',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the superman directive');
      // }
    };
  });
