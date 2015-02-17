'use strict';

describe('Directive: suspect', function () {

  // load the directive's module
  beforeEach(module('digitalCasefileApp'));
  beforeEach(module('templates'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {

    var parentScope = $rootScope.$new();
    var childScope = parentScope.$new();

    parentScope.data = {
      name: 'david'
    };

    var template = '<suspect data="data"></suspect>';
    element = $compile(template)(childScope);

    parentScope.$digest();
    scope = element.isolateScope();
  }));

  it('should complile the template', inject(function () {
    //expect(element.hasClass('suspect')).toBe(true);
    expect(element.find('form').length).toBe(1);
  }));





  // it('should have isolated scope', inject(function(){
  //   expect(element.hasClass('ng-isolate-scope')).toBe(true);
  // }));
});
