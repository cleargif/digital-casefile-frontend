'use strict';

describe('Directive: suspect', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('mocks'));
  beforeEach(module('templates'));

  var widget;
  var parentScope;
  var scope;

  var template = '<suspect data="data"></suspect>';

  beforeEach(inject(function($injector) {
    var $rootScope = $injector.get('$rootScope');
    var $compile = $injector.get('$compile');
    var suspectData = $injector.get('suspectDataMock');

    parentScope = $rootScope.$new();
    var childScope = parentScope.$new();

    parentScope.data = suspectData;

    var element = $compile(template)(childScope);

    parentScope.$digest();
    scope = element.isolateScope();

    widget = element[0];
  }));

  it('should have a form', inject(function () {
    expect(widget.querySelector('form')).not.toBe(null);
  }));

  it('should expose suspect data to the template', function() {
    expect(scope.suspect.fullname).toBe('john doe');
    expect(scope.suspect.age).toBe(32);
  });

  it('should show the suspect name in the input field', function() {
    var input = widget.querySelector('#suspect\\.fullname');
    expect(input.value).toBe('john doe');
  });

  it('should be updated on data change', function() {
    parentScope.data.fullname = 'Johnny Doe';
    parentScope.$digest();

    expect(scope.suspect.fullname).toBe('Johnny Doe');

    var input = widget.querySelector('#suspect\\.fullname');
    expect(input.value).toBe('Johnny Doe');
  });

});
