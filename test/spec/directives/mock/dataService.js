'use strict';

angular.module('mocks', [])
  .value('defendantDataMock', {
    'name': 'John Doe',
    'date_of_birthDay': '15',
    'date_of_birthMonth': '9',
    'date_of_birthYear': '1957',
    'occupation': 'This is my job',
    'class_a_drug_test_provided': 'yes',
    'committed_on_bail': 'yes',
    'breach_of_order': 'no',
    'pnc_record': 'yes',
    'interpretor_required': 'yes',
    'dealt_with_in_welsh': 'yes',
    'plea': 'LA'
  })
  .value('anotherSomethingMock', {
    propOne: 'value 1',
    propTwo: 'value 2'
  })
  .factory('casefileMock', function casefileMockFactory(defendantDataMock, anotherSomethingMock) {
    return {
      defendant: defendantDataMock,
      anotherSomething: anotherSomethingMock
    };
  });
