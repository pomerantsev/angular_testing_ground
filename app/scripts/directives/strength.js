'use strict';

angular.module('yoExampleApp')
  .directive('strength', function () {
    return {
      require: "superhero",
      link: function(scope, element, attrs, superheroCtrl) {
        superheroCtrl.addStrength();
      }
    };
  });
