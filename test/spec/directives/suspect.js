'use strict';

fdescribe('Directive: suspect', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('templates'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {

    var parentScope = $rootScope.$new(),
      childScope = parentScope.$new(),
      template = '<suspect data="data"></suspect>';

    element = $compile(template)(childScope);

    parentScope.$digest();

    scope = element.isolateScope();
  }));

  it('should complile the template with isolate scope', inject(function () {
    expect(element.hasClass('suspect')).toBe(true);
    expect(element.hasClass('ng-isolate-scope')).toBe(true);
  }));

});
