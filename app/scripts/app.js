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
    'ngCookies',
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTable'
  ])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/disclaimer.html',
      controller: 'DisclaimerCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/casefile/:urn', {
      templateUrl: 'views/casefile.html',
      controller: 'CasefileCtrl'
    })
    .when('/contactsheet/', {
      templateUrl: 'views/contactsheet.html',
      controller: 'ContactsheetCtrl'
    })
    .when('/dcfdelete', {
      templateUrl: 'views/dcfdelete.html',
      controller: 'DcfdeleteCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
