'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:suspect
 * @description
 * # suspect
 */
angular.module('digitalCasefileApp')
  .directive('suspect', function () {
    return {
      templateUrl: 'scripts/directives/suspect.html',
      restrict: 'E',
      scope: {},
      replace: true,
      link: function postLink(scope, element, attrs) {
        console.log('suspect', [scope, element, attrs]);

        //console.log(element.hasClass('suspect'));

      }
    };
  });
