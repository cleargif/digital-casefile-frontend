'use strict';

/**
 * @ngdoc function
 * @name digitalCasefileApp.controller:CasefileCtrl
 * @description
 * # CasefileCtrl
 * Controller of the digitalCasefileApp
 */
angular.module('digitalCasefileApp')
  .controller('CasefileCtrl', function ($scope, $routeParams, localstore) {
    console.log('CasefileCtrl');

    $scope.casefile = localstore.ref.get($routeParams.urn);

    $scope.saveCtrl = function(data){
      console.log('saveSection', data);
    };
  });
