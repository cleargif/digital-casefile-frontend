'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:dateofoffence
 * @description
 * # dateofoffence
 */
angular.module('digitalCasefileApp')
  .directive('dateofoffence', function () {
    return {
      templateUrl: 'scripts/directives/dateofoffence.html',
      restrict: 'E',
      scope: {},
      replace: true,
      link: function postLink(scope, element, attrs) {
        console.log('dateofoffence',[scope,  element, attrs]);
      }
    };
  });
