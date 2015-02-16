'use strict';

/**
 * @ngdoc function
 * @name digitalCasefileApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the digitalCasefileApp
 */
angular.module('digitalCasefileApp')
  .controller('AboutCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');
    var something = localStorageService.get('somethi');

    $scope.something = something || [];

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      console.log('watch callback');
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      console.log('addTodo', arguments);
      $scope.todos.push($scope.todo);
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  });
