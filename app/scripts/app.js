'use strict';

angular.module('yoExampleApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/binding', {
        templateUrl: 'views/01-binding.html'
      })
      .when('/controllers', {
        templateUrl: 'views/02-controllers.html',
        controller: 'FirstCtrl'
      })
      .when('/the-dot', {
        templateUrl: 'views/03-the-dot.html'
      })
      .when('/sharing-data', {
        templateUrl: 'views/04-sharing-data.html'
      })
      .when('/method', {
        templateUrl: 'views/05-method.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
