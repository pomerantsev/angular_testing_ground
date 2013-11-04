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
      .when('/filters', {
        templateUrl: 'views/06-filters.html'
      })
      .when('/ng-repeat', {
        templateUrl: 'views/08-ng-repeat.html',
        controller: 'AvengersCtrl'
      })
      .when('/built-in-filters', {
        templateUrl: 'views/09-built-in-filters.html',
        controller: 'AvengersCtrl'
      })
      .when('/first-directive', {
        templateUrl: 'views/10-first-directive.html'
      })
      .when('/directive-restrictions', {
        templateUrl: 'views/11-directive-restrictions.html'
      })
      .when('/basic-behaviors', {
        templateUrl: 'views/12-basic-behaviors.html'
      })
      .when('/useful-behaviors', {
        templateUrl: 'views/13-useful-behaviors.html'
      })
      .when('/directives-talking-to-controllers', {
        templateUrl: 'views/14-directives-talking-to-controllers.html',
        controller: 'TwitterCtrl'
      })
      .when('/directive-to-directive-communication', {
        templateUrl: 'views/15-directive-to-directive-communication.html'
      })
      .when('/isolate-scope', {
        templateUrl: 'views/16-isolate-scope.html',
        controller: 'ChoreCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
