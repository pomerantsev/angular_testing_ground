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
      .when('/isolate-scope-1', {
        templateUrl: 'views/17-isolate-scope-1.html',
        controller: 'DrinkCtrl'
      })
      .when('/isolate-scope-3', {
        templateUrl: 'views/19-isolate-scope-3.html',
        controller: 'PhoneCtrl'
      })
      .when('/isolate-scope-review', {
        templateUrl: 'views/20-isolate-scope-review.html',
        controller: 'App20Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
