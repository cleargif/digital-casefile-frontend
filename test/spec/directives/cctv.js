'use strict';

describe('Directive: cctv', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('templates'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<cctv></cctv>');
    element = $compile(element)(scope);

    scope.$digest();

  }));

  it('should load the template', inject(function () {
    expect(element.hasClass('cctv')).toBe(true);
  }));

  it('should have isolated scope', inject(function(){
    expect(element.hasClass('ng-isolate-scope')).toBe(true);
  }));
});
