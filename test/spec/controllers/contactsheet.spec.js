'use strict';

describe('Controller: ContactsheetCtrl', function () {

  // load the controller's module
  beforeEach(module('digitalCasefileApp'));

  var ContactsheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactsheetCtrl = $controller('ContactsheetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
