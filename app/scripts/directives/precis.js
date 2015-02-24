'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:precis
 * @description
 * # precis
 */
angular.module('digitalCasefileApp')
  .directive('precis', function () {
    return {
      templateUrl: 'scripts/directives/precis.html',
      restrict: 'E',
      scope: {
        precis: '=data',
        urn: '=urn',
        store: '&'
      },
      replace: true,
      link: function postLink() {
        //console.log('precis link', [$scope, $element, $attrs]);

      }
    };
  });
