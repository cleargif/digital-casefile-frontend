'use strict';

describe('Controller: DcfdeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('digitalCasefileApp'));

  var DcfdeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DcfdeleteCtrl = $controller('DcfdeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach tableParams to the scope', function () {
    expect(scope.tableParams).toBeDefined();
  });
});
