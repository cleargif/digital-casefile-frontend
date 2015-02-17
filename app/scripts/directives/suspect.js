'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:suspect
 * @description
 * # suspect
 */
angular.module('digitalCasefileApp')
  .directive('suspect', function () {
    return {
      templateUrl: 'scripts/directives/suspect.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      replace: true,
      link: function postLink() {
        //console.log('suspect link', [$scope, $element, $attrs]);

      }
    };
  });
