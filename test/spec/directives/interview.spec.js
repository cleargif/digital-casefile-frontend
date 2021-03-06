'use strict';

describe('Directive: interview', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('mocks'));
  beforeEach(module('templates'));

  var widget;
  var parentScope;
  var scope;

  var template = '<interview data="data"></interview>';

  beforeEach(inject(function($injector) {
    var $rootScope = $injector.get('$rootScope');
    var $compile = $injector.get('$compile');
    var casefile = $injector.get('casefileMock');

    parentScope = $rootScope.$new();
    var childScope = parentScope.$new();

    parentScope.data = casefile.interview;

    var element = $compile(template)(childScope);

    parentScope.$digest();
    scope = element.isolateScope();

    widget = element[0];
  }));

  it('should have a form', inject(function () {
    expect(widget.querySelector('form')).not.toBe(null);
  }));

  // it('should show the interview name in the input field', function() {
  //   var input = widget.querySelector('#interview\\.fullname');
  //   expect(input.value).toBe('john doe');
  // });

  // it('should be updated on data change', function() {
  //   parentScope.data.fullname = 'Johnny Doe';
  //   parentScope.$digest();

  //   expect(scope.interview.fullname).toBe('Johnny Doe');

  //   var input = widget.querySelector('#interview\\.fullname');
  //   expect(input.value).toBe('Johnny Doe');
  // });

});
