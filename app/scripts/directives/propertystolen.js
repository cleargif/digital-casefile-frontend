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
      scope: {
        propertystolen: '=data',
        store: '&',
        showspinner: '='
      },
      replace: true,
      link: function postLink() {
        //console.log('propertystolen link', [$scope, $element, $attrs]);

      }
    };
  });
