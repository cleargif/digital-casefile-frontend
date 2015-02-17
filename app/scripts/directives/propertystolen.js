'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:propertystolen
 * @description
 * # propertystolen
 */
angular.module('digitalCasefileApp')
  .directive('propertystolen', function () {
    return {
      templateUrl: 'scripts/directives/propertystolen.html',
      restrict: 'E',
      scope: {},
      replace: true,
      link: function postLink(scope, element, attrs) {
        //console.log('propertystolen', [scope, element, attrs]);
      }
    };
  });
