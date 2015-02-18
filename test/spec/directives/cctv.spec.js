'use strict';

describe('Directive: cctv', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('mocks'));
  beforeEach(module('templates'));

  var widget;
  var parentScope;
  var scope;

  var template = '<cctv data="casefile.cctv" store="saveCtrl(cctv)"></cctv>';

  beforeEach(inject(function($injector) {
    var $rootScope = $injector.get('$rootScope');
    var $compile = $injector.get('$compile');
    var casefile = $injector.get('casefileMock');

    // Parent and Child Scope
    parentScope = $rootScope.$new();
    var childScope = parentScope.$new();

    // Set properties on the parent scope
    parentScope.data = casefile.cctv;


    var element = $compile(template)(childScope);

    parentScope.$digest();
    scope = element.isolateScope();

    widget = angular.element(element[0]);
  }));

  it('should have a form', inject(function () {
    expect(widget.find('form')).not.toBe(null);
  }));

  it('should have 5 inputs and 2 textareas', function() {
    expect(widget.find('input').length).toBe(5);
    expect(widget.find('textarea').length).toBe(4);
  });

  // it('should show the cctv name in the input field', function() {
  //   var input = widget.querySelector('#cctv\\.fullname');
  //   expect(input.value).toBe('john doe');
  // });

  // it('should be updated on data change', function() {
  //   parentScope.data.fullname = 'Johnny Doe';
  //   parentScope.$digest();

  //   expect(scope.cctv.fullname).toBe('Johnny Doe');

  //   var input = widget.querySelector('#cctv\\.fullname');
  //   expect(input.value).toBe('Johnny Doe');
  // });

});
