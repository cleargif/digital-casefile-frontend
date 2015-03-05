'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:signoff
 * @description
 * # signoff
 */
angular.module('digitalCasefileApp')
  .directive('signoff', function () {
    return {
      templateUrl: 'scripts/directives/signoff.html',
      restrict: 'E',
      scope: {
        signoff: '=data',
        urn: '=urn',
        store: '&',
        showspinner: '='
      },
      replace: true,
      link: function postLink() {
        //console.log('signoff link', [$scope, $element, $attrs]);

      }
    };
  });
