'use strict';

angular.module('yoExampleApp')
  .directive('speed', function () {
    return {
      require: "superhero",
      link: function(scope, element, attrs, superheroCtrl) {
        superheroCtrl.addSpeed();
      }
    };
  });

