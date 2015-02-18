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
      scope: {
        suspect: '=data',
        store: '&'
      },
      replace: true,
      link: function postLink(scope) {
        //console.log('suspect link', [$scope, $element, $attrs]);

        scope.pleaOptions = [{
          name: 'Non-guilty',
          value: 'nonGuilty'
        }, {
          name: 'Guilty',
          value: 'guilty'
        }, {
          name: 'Restorative justice',
          value: 'restorativeJustice'
        }, {
          name: 'Fine',
          value: 'fine'
        }];


      }
    };
  });
