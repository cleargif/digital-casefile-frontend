'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:contentnav
 * @description
 * # contentnav
 */
angular.module('digitalCasefileApp')
  .directive('contentnav', function ($location, $anchorScroll) {
    return {
      templateUrl: 'scripts/directives/contentnav.html',
      restrict: 'E',
      scope:{},
      replace: true,
      link: function postLink(scope, element) {
        //console.log('contentnav link', [$scope, $element, $attrs]);
        //

        scope.closeAll = function () {
          angular.element('.panel-wrapper').is(function (idx, el) {
            var $el = angular.element(el).find('.panel-body');
            if ($el.is(':visible')) {
              $el.hide();
            }
          });
        };
        scope.sections = [{
          sectionName: 'Pre-Questions',
          anchor: 'pre-questions',
          sublevels: [{
            sectionName: 'Case overview',
            anchor: 'precis'
          }, {
            sectionName: 'Defendant details',
            anchor: 'defendant'
          }]
        }, {
          sectionName: 'The offence',
          anchor: 'offence-top',
          sublevels: [{
            sectionName: 'Offence',
            anchor: 'offence'
          }, {
            sectionName: 'Property Damaged',
            anchor: 'propertydamaged'
          }, {
            sectionName: 'Property Stolen',
            anchor: 'propertystolen'
          }]
        }, {
          sectionName: 'Retail Theft',
          anchor: 'retail-theft',
          sublevels: [{
            sectionName: 'Interview',
            anchor: 'interview'
          }, {
            sectionName: 'Multi Media Evidance',
            anchor: 'mme'
          }, {
            sectionName: 'Witness',
            anchor: 'witness'
          }, {
            sectionName: 'Victim Compensation',
            anchor: 'compensation'
          }, {
            sectionName: 'Court order',
            anchor: 'courtorder'
          }]
        }, {
          sectionName: 'Case review',
          anchor: 'case-review'
        }, {
          sectionName: 'Sign-off',
          anchor: 'sign-off-top'
        }];

        element.on('click', function (event) {
          // Stop propogation
          event.stopPropagation();

          // cache the listner so we can remove it
          var unblock = scope.$on('$locationChangeStart', function (ev) {
            ev.preventDefault();
          });


          // cache the event target element
          var $el = angular.element(event.target);

          // find the anchor data
          var $anchor = angular.element('#' + $el.data('anchor'));

          // check if the parent is open / closed
          var $anchoParent = $anchor.closest('.panel-info');



          // if parent closed then open it
          if (!$anchoParent.find('.panel-body').is(':visible')) {
            $anchoParent.find('.panel-body').show();
          }

          // set the hash and scroll
          $location.hash($el.data('anchor'));
          $anchorScroll();

          // if close all
          // works better here than in a branch of a if / else.
          // Interface is less jerky
          if ($el.data('anchor') === 'closeall') {
            scope.closeAll();
          }

          // unbind the event
          unblock();
        });

      }
    };
  });
