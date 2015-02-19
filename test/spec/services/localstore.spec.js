'use strict';

describe('Service: localstore', function () {

  // load the service's module
  beforeEach(module('digitalCasefileApp'));

  // instantiate service
  var localstore;

  beforeEach(inject(function (_localstore_) {
    localstore = _localstore_;
  }));

  it('should exist', function () {
    //console.log(localstore);
    expect(!!localstore.ref).toBe(true);
  });

  it('should behave a save method', function() {
    expect(localstore.save).toBeDefined();
  });

});
