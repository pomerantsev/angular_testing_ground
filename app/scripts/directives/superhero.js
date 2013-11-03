'use strict';

angular.module('yoExampleApp')
  .directive('superhero', function () {
    return {
      restrict: "E",
      scope: {},
      controller: function($scope) {
        $scope.abilities = [];
        this.addStrength = function() {
          $scope.abilities.push("strength");
        }
        this.addSpeed = function() {
          $scope.abilities.push("speed");
        }
        this.addFlight = function() {
          $scope.abilities.push("flight");
        }
      },
      link: function(scope, element) {
        element.addClass("label label-default");
        element.bind("mouseenter", function() {
          console.log(scope.abilities);
        });
      }
    };
  });
