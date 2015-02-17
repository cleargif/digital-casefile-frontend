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
    //console.log('CasefileCtrl', [$scope, $routeParams.urn, localstore.ref]);

    $scope.casefile = localstore.ref.get($routeParams.urn);


  });
