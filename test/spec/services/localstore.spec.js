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

  it('should behave a ref method', function() {
    expect(localstore.ref).toBeDefined();
  });

  it('should behave a getAll method', function() {
    expect(localstore.getAll).toBeDefined();
  });

  it('should behave a getCaseById method', function() {
    expect(localstore.getCaseById).toBeDefined();
  });

  it('should behave a storeData method', function() {
    expect(localstore.storeData).toBeDefined();
  });

});
