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
      scope: {
        interview: '=data',
        store: '&',
        showspinner: '='
      },
      replace: true,
      link: function postLink() {
        //console.log('interview link', [$scope, $element, $attrs]);

      }
    };
  });
