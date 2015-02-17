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

  it('should be supported', function () {
    expect(localstore.ref.isSupported).toBe(true);
  });

  it('should be of localStorage type', function () {
    expect(localstore.ref.getStorageType()).toBe('localStorage');
  });

  it('should write to local storate', function () {
    localstore.ref.set('some', 'thing');
    expect(localstore.ref.get('some')).toBe('thing');
  });


});
