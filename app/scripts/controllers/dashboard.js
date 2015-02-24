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

    var $spinner = angular.element('#spinner');
    var $table = angular.element('#table');

    function loadData() {

      $spinner.show();
      $table.hide();

      localstore.getAll().then(function () {

        $spinner.hide();
        $table.show();
        $scope.data = localstore.ref();

      });
    }

    $scope.reloadData = function () {
      loadData();
    };

    $scope.newCasefile = function () {
      localstore.newCasefile().then(function () {
        $scope.reloadData();
      });
    };

    $scope.reloadData();

  });
