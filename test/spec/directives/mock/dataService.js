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
  }).value('interviewDataMock', {
    'admissions_made': 'Summarise briefly the admissions made, defences raised, and any explanation given in interview.',
    'admit_being_dishonest': 'no',
    'admit_taking_property': 'no',
    'aggravating_features': 'Are there any aggravating features in the case?',
    'defendant_legally_represented': 'yes',
    'explanations_made': 'Are there any explanations made?',
    'mitigating_circumstances': 'Summarise briefly any mitigating circumstances including any remorse shown.',
    'reason': 'If not interviewed, please provide a reason why:',
    'was_defendant_interviewed': 'no'
  })
  .factory('casefileMock', function casefileMockFactory(defendantDataMock, interviewDataMock) {
    return {
      defendant: defendantDataMock,
      interview: interviewDataMock
    };
  });
