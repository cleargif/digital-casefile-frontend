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
      scope: {
        suspectresponse: '=data'
      },
      replace: true,
      link: function postLink() {
        //console.log('suspectresponse link', [$scope, $element, $attrs]);

      }
    };
  });
