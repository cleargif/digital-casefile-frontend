'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:offence
 * @description
 * # offence
 */
angular.module('digitalCasefileApp')
  .directive('offence', function () {
    return {
      templateUrl: 'scripts/directives/offence.html',
      restrict: 'E',
      scope: {
        offence: '=data',
        store: '&',
        showspinner: '='
      },
      replace: true,
      link: function postLink(scope) {
        //console.log('offence link', [$scope, $element, $attrs]);

        scope.offenceTitles = [{
          value: '1',
          name: 'Retail Theft'
        }];

        scope.pleaOptions = [{
          value: '1',
          name: 'Guilty'
        }, {
          value: '2',
          name: 'Not Guilty'
        }];
      }
    };
  });
