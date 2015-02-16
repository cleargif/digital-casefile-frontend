'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:suspectresponse
 * @description
 * # suspectresponse
 */
angular.module('digitalCasefileApp')
  .directive('suspectresponse', function () {
    return {
      templateUrl: 'scripts/directives/suspectresponse.html',
      restrict: 'E',
      scope: {},
      replace: true,
      link: function postLink(scope, element, attrs) {
        console.log('suspectresponse', [scope, element, attrs]);
      }
    };
  });
