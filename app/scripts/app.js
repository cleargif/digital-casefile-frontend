'use strict';

/**
 * @ngdoc overview
 * @name digitalCasefileApp
 * @description
 * # digitalCasefileApp
 *
 * Main module of the application.
 */
angular
  .module('digitalCasefileApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/casefile', {
        templateUrl: 'views/casefile.html',
        controller: 'CasefileCtrl'
      })
      .when('/contactsheet', {
        templateUrl: 'views/contactsheet.html',
        controller: 'ContactsheetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }]);
