'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:compensation
 * @description
 * # compensation
 */
angular.module('digitalCasefileApp')
  .directive('compensation', function () {
    return {
      templateUrl: 'scripts/directives/compensation.html',
      restrict: 'E',
      scope: {
        compensation: '=data',
        store: '&'
      },
      replace: true,
      link: function postLink() {
        //console.log('compensation link', [$scope, $element, $attrs]);

      }
    };
  });
