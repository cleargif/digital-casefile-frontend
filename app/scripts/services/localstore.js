'use strict';

/**
 * @ngdoc service
 * @name digitalCasefileApp.localstore
 * @description
 * # localstore
 * Service in the digitalCasefileApp.
 */
angular.module('digitalCasefileApp')
  .service('localstore', ['$http', function ($http) {
    var _container = [];
    var baseURL = 'https://dcf-backend.herokuapp.com/case_files/';

    function getAll() {
      return $http.get(baseURL, {
        //cache: true
      }).
      success(function (data) {
        _container = data;
      }).
      error(function () {});
    }

    function newCasefile() {
      return $http.get(baseURL + 'new', {
        //cache: true
      }).
      success(function () {

      }).
      error(function () {});
    }

    function getCaseById(id) {
      return $http.get(baseURL + id, {
        //cache: true
      }).
      success(function () {

      }).
      error(function () {});
    }

    function deleteCasefile(id) {
      return $http.delete(baseURL + id, {
        //cache: true
        transformResponse: function (message) {
          return {
            data: message
          };
        }
      }).
      success(function () {
        _.find(_container, function (obj, idx) {
          if(obj.id===id){
            _container.splice(idx, 1);
            return true;
          }
        });

      }).error(function () {});
    }

    function storeData(data, id) {
      return $http({
        method: 'PUT',
        url: baseURL + id,
        data: 'case_file=' + JSON.stringify(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
      }).success(function () {}).
      error(function () {});
    }



    return {
      ref: function () {
        return _container;
      },
      getAll: function () {
        return getAll();
      },
      getCaseById: function (id) {
        return getCaseById(id);
      },
      deleteCasefile: function (id) {
        return deleteCasefile(id);
      },
      storeData: function (data, id) {
        return storeData(data, id);
      },
      newCasefile: function () {
        return newCasefile();
      }
    };
  }]);


/*

  -



 */
