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
    'pascalprecht.translate'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
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
      .otherwise({
        redirectTo: '/'
      });
  })

  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      HEADLINE: 'Hello there, This is my awesome app!',
      INTRO_TEXT: 'And it has i18n support!'
    });
  });
