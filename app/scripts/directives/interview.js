'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:interview
 * @description
 * # interview
 */
angular.module('digitalCasefileApp')
  .directive('interview', function () {
    return {
      templateUrl: 'scripts/directives/interview.html',
      restrict: 'E',
      scope: {},
      replace: true,
      link: function postLink(scope, element, attrs) {
        console.log('interview',[scope,  element, attrs]);
      }
    };
  });
