'use strict';

/**
 * @ngdoc service
 * @name digitalCasefileApp.localstore
 * @description
 * # localstore
 * Service in the digitalCasefileApp.
 */
angular.module('digitalCasefileApp')
  .service('localstore', ['localStorageService', function (localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _container = [];
    var sampleData = [{
      'urn': '1234567890',
      'type': 'Theft',
      'suspect': {
        'fullname': 'Billy the Kid',
        'dobD': '25',
        'dobM': '12',
        'dobY': '1990',
        'plea':'restorativeJustice',
        'URN': '1234567890'
      },
      'dateofoffence': {
        'offenceday':'26',
        'offencemonth': '5',
        'offenceyear': '2010',
        'offencetimehour': '15',
        'offencetimeminute': '30'
      }
    },{
      'urn': '0987654321',
      'type': 'Robbery',
      'suspect': {
        'fullname': 'Solly the Brick',
        'dobD': '25',
        'dobM': '12',
        'dobY': '1990',
        'plea':'guilty',
        'URN': '0987654321'
      },
      'dateofoffence': {
        'offenceday':'26',
        'offencemonth': '5',
        'offenceyear': '2010',
        'offencetimehour': '15',
        'offencetimeminute': '30'
      }
    }];

    function init(defer) {
      if(!_container.length){
        angular.forEach(sampleData, function(obj){
          localStorageService.set(obj.urn, JSON.stringify(obj));
          _container.push(localStorageService.get(obj.urn));
        });
      }

      console.log(_container);
      return defer.resolve();
    }

    return {
      data: _container,
      ref: localStorageService,
      init: function(defer){
        return init(defer);
      }
    };
  }]);
