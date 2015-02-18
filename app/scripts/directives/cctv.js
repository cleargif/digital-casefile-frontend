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
      scope: {
        cctv: '=data',
        store: '&'
      },
      replace: true,
      link: function postLink(scope) {
        //console.log('cctv link', [$scope, $element, $attrs]);
        angular.element.jqReveal();
      }
    };
  });
