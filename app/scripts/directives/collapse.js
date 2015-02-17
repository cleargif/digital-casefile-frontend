'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:collapse
 * @description
 * # collapse
 */
angular.module('digitalCasefileApp')
  .directive('collapse', function () {
    return {
      restrict: 'A',
      scope: {},
      link: function postLink(scope, element) {

        element.on('click', '.panel-title', function (e) {
          e.preventDefault();
          var panel = angular.element(e.currentTarget).closest('.panel');
          panel.find('.panel-body').toggle();
        });
      }
    };
  });
