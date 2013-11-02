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
      .when('/controllers',{
        templateUrl: 'views/02-controllers.html',
        controller: 'FirstCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
