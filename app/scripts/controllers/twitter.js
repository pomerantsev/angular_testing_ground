'use strict';

angular.module('yoExampleApp')
  .controller('TwitterCtrl', function ($scope) {
    $scope.loadMoreTweets = function() {
      alert("Loading tweets!");
    }
    $scope.deleteTweets = function() {
      alert("Deleting tweets...");
    }
  });
