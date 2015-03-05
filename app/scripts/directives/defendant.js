'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:defendant
 * @description
 * # defendant
 */
angular.module('digitalCasefileApp')
  .directive('defendant', function () {
    return {
      templateUrl: 'scripts/directives/defendant.html',
      restrict: 'E',
      scope: {
        defendant: '=data',
        store: '&',
        showspinner: '='
      },
      replace: true,
      link: function postLink(scope) {
        //console.log('defendant link', [$scope, $element, $attrs]);
        scope.pleaOptions = [
          {
            value: 'CB',
            name: ' Conditional Bail'
          }, {
            value: 'HO',
            name: 'Custody (hospital)'
          }, {
            value: 'LA',
            name: ' Care'
          }, {
            value: 'NA',
            name: ' Not Applicable'
          }, {
            value: 'PC',
            name: ' Police and/or HM Customs Detention'
          }, {
            value: 'PR',
            name: ' Custody'
          }, {
            value: 'SA',
            name: ' Secure Care'
          }, {
            value: 'UB',
            name: ' Unconditional Bail'
          }
        ];



        // element.find('input').bind('blur', function () {
        //   scope.store({
        //     defendant: scope.defendant
        //   });
        // });

        // element.find('select').bind('change', function () {
        //   scope.store({
        //     defendant: scope.defendant
        //   });
        // });
      }
    };
  });
