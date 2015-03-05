'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:disclosure
 * @description
 * # disclosure
 */
angular.module('digitalCasefileApp')
  .directive('disclosure', function () {
    return {
      templateUrl: 'scripts/directives/disclosure.html',
      restrict: 'E',
      scope: {
        disclosure: '=data',
        urn: '=urn',
        store: '&',
        showspinner: '='
      },
      replace: true,
      link: function postLink() {
        //console.log('disclosure link', [$scope, $element, $attrs]);

      }
    };
  });
