'use strict';

describe('Controller: DisclaimerCtrl', function () {

  // load the controller's module
  beforeEach(module('digitalCasefileApp'));

  var DisclaimerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DisclaimerCtrl = $controller('DisclaimerCtrl', {
      $scope: scope
    });
  }));
});
