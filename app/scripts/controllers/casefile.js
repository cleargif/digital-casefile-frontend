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

    localstore.getCaseById(parseInt($routeParams.urn,10)).then(function(response){
      $scope.casefile = response.data;
    });


    $scope.saveCtrl = function(data){
      localstore.storeData(data, $scope.casefile.id).then(function(response){
        $scope.casefile = response.data;
      });
    };
  });
