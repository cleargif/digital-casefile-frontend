'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:witness
 * @description
 * # witness
 */
angular.module('digitalCasefileApp')
  .directive('witness', function () {
    return {
      templateUrl: 'scripts/directives/witness.html',
      restrict: 'E',
      scope: {
        witness: '=data',
        urn: '=urn',
        store: '&'
      },
      replace: true,
      link: function postLink(scope) {
        //console.log('witness link', [$scope, $element, $attrs]);

        scope.witnesTypeList = [{
          value: 'expert',
          name: 'Expert'
        }, {
          value: 'eye',
          name: 'Eye'
        }, {
          value: 'identity',
          name: 'Identity'
        }, {
          value: 'arresting officer',
          name: 'Arresting officer'
        }, {
          value: 'interviewing officer',
          name: 'Interviewing officer'
        }, {
          value: 'child',
          name: 'Child'
        }, {
          value: 'corroborative',
          name: 'Corroborative'
        }, {
          value: 'continuity',
          name: 'Continuity'
        }, {
          value: 'interpreter',
          name: 'Interpreter'
        }, {
          value: 'police',
          name: 'Police'
        }, {
          value: 'professional',
          name: 'Professional'
        }, {
          value: 'special',
          name: 'Special'
        }, {
          value: 'prisoner',
          name: 'Prisoner'
        }, {
          value: 'vulnerable',
          name: 'Vulnerable'
        }, {
          value: 'intimidated',
          name: 'Intimidated'
        }, {
          value: 'other',
          name: 'Other'
        }];



        scope.witnesWishList = [{
          value: 'yes_cps_to_read',
          name: 'Yes CPS to read'
        }, {
          value: 'yes_victim_to_read',
          name: 'Yes Victim to read'
        }, {
          value: 'no_cps_to_read',
          name: 'No CPS to read'
        }, {
          value: 'no_cps_to_disclose_and_not_to_read',
          name: 'No CPS to disclose and not to read'
        }];

      }
    };
  });
