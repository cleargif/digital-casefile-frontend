'use strict';

angular.module('mocks', [])
.value('suspectDataMock', {
  fullname: 'john doe',
  age: 32
})
.value('anotherSomethingMock', {
  propOne: 'value 1',
  propTwo: 'value 2'
})
.factory('casefileMock', function casefileMockFactory (suspectDataMock, anotherSomethingMock) {
  return {
    suspect: suspectDataMock,
    anotherSomething: anotherSomethingMock
  };
});
