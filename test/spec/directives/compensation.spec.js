'use strict';

describe('Directive: compensation', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('mocks'));
  beforeEach(module('templates'));

  var widget;
  var parentScope;
  var scope;

  var template = '<compensation data="casefile.compensation" store="saveCtrl({compensation: compensation})"></compensation>';

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

  it('should have a form', inject(function () {
    expect(widget.find('form')).not.toBe(null);
  }));


});
