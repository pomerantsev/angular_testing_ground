'use strict';

angular.module('yoExampleApp')
  .directive('phone', function () {
    return {
      scope: {
        dial: "&"
      },
      template: "<input type='text' ng-model='value'>" +
                "<div class='btn btn-default' ng-click='dial({message:value})'>Call home</div>"
    };
  });
