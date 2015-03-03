'use strict';

describe('Directive: contentnav', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('mocks'));
  beforeEach(module('templates'));

  var widget;
  var parentScope;
  var scope;

  var template = '<contentnav></contentnav>';

  beforeEach(inject(function ($injector) {
    var $rootScope = $injector.get('$rootScope');
    var $compile = $injector.get('$compile');
    var casefile = $injector.get('casefileMock');

    parentScope = $rootScope.$new();
    var childScope = parentScope.$new();

    parentScope.casefile = casefile;

    var element = $compile(template)(childScope);

    parentScope.$digest();
    scope = element.isolateScope();

    widget = angular.element(element[0]);
  }));



  // it('should expose defendant data to the template', function() {
  //   expect(scope.defendant.name).toBe('John Doe');
  //   expect(scope.defendant.date_of_birthDay).toBe('15');
  // });

  // it('should show the defendant name in the input field', function() {
  //   var input = widget.find('#defendant\\.name');
  //   expect(input.val()).toBe('John Doe');
  // });

  // it('should be updated on data change', function() {
  //   parentScope.casefile.defendant.name = 'Johnny Doe';
  //   parentScope.$digest();

  //   expect(scope.defendant.name).toBe('Johnny Doe');

  //   var input = widget.find('#defendant\\.name');
  //   expect(input.val()).toBe('Johnny Doe');
  // });

});
