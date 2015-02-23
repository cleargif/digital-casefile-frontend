'use strict';

/**
 * @ngdoc function
 * @name digitalCasefileApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the digitalCasefileApp
 */
angular.module('digitalCasefileApp')
  .controller('DashboardCtrl', function ($scope, localstore) {

    function loadData() {
      localstore.getAll().then(function () {
        $scope.data = localstore.ref();
      });
    }

    $scope.reloadData = function () {
      loadData();
    };

    $scope.newCasefile = function(){
      localstore.newCasefile().then(function(){
        $scope.reloadData();
      });
    };

    $scope.reloadData();

  });
