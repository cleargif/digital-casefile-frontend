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

    localstore.getCaseById(parseInt($routeParams.urn, 10)).then(function (response) {
      $scope.casefile = response.data;
    });


    $scope.saveCtrl = function (data) {
      localstore.storeData(data, $scope.casefile.id).then(function (response) {
        $scope.casefile = response.data;
      });
    };

    $timeout(function () {
      angular.element.jqReveal();
    }, 1800);


  });
