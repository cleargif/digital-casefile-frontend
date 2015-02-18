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
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        resolve: {
          dataLoad: function ($q, localstore) {
            var defer = $q.defer();
            localstore.init(defer);
            return defer.promise;
          }
        }
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
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('CPS')
      .setStorageType('localStorage')
      .setNotify(true, true);
  });
