'use strict';

angular.module('mocks', [])
.value('suspectDataMock', {
  fullname: 'john doe',
  age: 32
})
.factory('dataServiceMock', function dataServiceMockFactory () {
  return {
    suspectData: {
      fullname: 'joe burglar',
      age: 17
    }
  };
});
