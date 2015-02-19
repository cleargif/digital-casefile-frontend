'use strict';

describe('Controller: CasefileCtrl', function () {

  // load the controller's module
  beforeEach(module('digitalCasefileApp'));

  var CasefileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CasefileCtrl = $controller('CasefileCtrl', {
      $scope: scope
    });
  }));

});
