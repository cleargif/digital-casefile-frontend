'use strict';

/**
 * @ngdoc function
 * @name digitalCasefileApp.controller:DcfdeleteCtrl
 * @description
 * # DcfdeleteCtrl
 * Controller of the digitalCasefileApp
 */
angular.module('digitalCasefileApp')
  .controller('DcfdeleteCtrl', function ($scope, localstore, NgTableParams, $filter, $window) {

    var defGetAll = localstore.getAll();

    defGetAll.then(function (obj) {
      $scope.data = obj.data;
    });

    $scope.tableParams = new NgTableParams({
      page: 1, // show first page
      count: 10, // count per page
      // filter: {
      //   name: 'M' // initial filter
      // },
      sorting: {
        updated_at: 'desc' // initial sorting
      }
    }, {
      total: 0, // length of data
      getData: function ($defer, params) {

        defGetAll.then(function () {
          var filteredData = params.filter() ?
            $filter('filter')($scope.data, params.filter()) :
            $scope.data;
          var orderedData = params.sorting() ?
            $filter('orderBy')(filteredData, params.orderBy()) :
            $scope.data;

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        });
        // use build-in angular filter



      }
    });


    $scope.deleteCasefile = function (id) {
      if ($window.confirm('Are you sure?')) {
        localstore.deleteCasefile(id).then(function () {
          $scope.tableParams.reload();
        });
      }
    };

  });
