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
      scope: {
        dateofoffence: '=data'
      },
      replace: true,
      link: function postLink() {
        //console.log('dateofoffence link', [$scope, $element, $attrs]);

      }
    };
  });
