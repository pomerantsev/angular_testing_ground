'use strict';

angular.module('yoExampleApp')
  .directive('flight', function () {
    return {
      require: "superhero",
      link: function(scope, element, attrs, superheroCtrl) {
        superheroCtrl.addFlight();
      }
    };
  });
