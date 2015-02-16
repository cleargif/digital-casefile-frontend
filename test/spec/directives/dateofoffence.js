'use strict';

describe('Directive: dateofoffence', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('templates'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<dateofoffence></dateofoffence>');
    element = $compile(element)(scope);

    scope.$digest();

  }));

  it('should load the template', inject(function () {
    expect(element.hasClass('dateofoffence')).toBe(true);
  }));

  it('should have isolated scope', inject(function(){
    expect(element.hasClass('ng-isolate-scope')).toBe(true);
  }));
});
