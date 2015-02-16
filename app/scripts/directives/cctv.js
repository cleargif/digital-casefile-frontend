'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:cctv
 * @description
 * # cctv
 */
angular.module('digitalCasefileApp')
  .directive('cctv', function () {
    return {
      templateUrl: 'scripts/directives/cctv.html',
      restrict: 'E',
      scope: {},
      replace: true,
      link: function postLink(scope, element, attrs) {
        console.log('cctv', [scope, element, attrs]);
      }
    };
  });
