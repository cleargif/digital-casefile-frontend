'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:propertydamaged
 * @description
 * # propertydamaged
 */
angular.module('digitalCasefileApp')
  .directive('propertydamaged', function () {
    return {
      templateUrl: 'scripts/directives/propertydamaged.html',
      restrict: 'E',
      scope: {
        propertydamaged: '=data',
        store: '&'
      },
      replace: true,
      link: function postLink() {
        //console.log('propertydamaged link', [$scope, $element, $attrs]);


      }
    };
  });
