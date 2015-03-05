'use strict';

/**
 * @ngdoc function
 * @name digitalCasefileApp.controller:CasefileCtrl
 * @description
 * # CasefileCtrl
 * Controller of the digitalCasefileApp
 */
angular.module('digitalCasefileApp')
  .controller('CasefileCtrl', function ($scope, $routeParams, localstore, $timeout) {
    // console.log('CasefileCtrl');

    $scope.showspinner = false;

    localstore.getCaseById(parseInt($routeParams.urn, 10)).then(function (response) {
      $scope.casefile = response.data;
    });


    $scope.saveCtrl = function (data) {
      $scope.showspinner = true;
      localstore.storeData(data, $scope.casefile.id).then(function (response) {
        $timeout(function(){
          $scope.showspinner = false;
        }, 500);
        $scope.casefile = response.data;
      });
    };

    $timeout(function () {
      angular.element.jqReveal();
    }, 1800);


  });
