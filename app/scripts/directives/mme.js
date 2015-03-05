'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:mme
 * @description
 * # mme
 */
angular.module('digitalCasefileApp')
  .directive('mme', function () {
    return {
      templateUrl: 'scripts/directives/mme.html',
      restrict: 'E',
      scope: {
        mme: '=data',
        store: '&',
        showspinner: '='
      },
      replace: true,
      link: function postLink(scope) {
        //console.log('mme link', [$scope, $element, $attrs]);


        scope.mmeTypes = [
          {
            value: 'cctv',
            name: 'CCTV'
          }, {
            value: 'facewatch',
            name: 'Face Watch'
          }, {
            value: 'body_worn_video',
            name: 'Body worn video'
          }, {
            value: 'surveillance_camera',
            name: 'Surveillance Camera'
          }, {
            value: '999_call',
            name: '999 Call'
          }
        ];
      }
    };
  });
