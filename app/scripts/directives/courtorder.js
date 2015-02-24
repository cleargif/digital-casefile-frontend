'use strict';

/**
 * @ngdoc directive
 * @name digitalCasefileApp.directive:courtorder
 * @description
 * # courtorder
 */
angular.module('digitalCasefileApp')
  .directive('courtorder', function () {
    return {
      templateUrl: 'scripts/directives/courtorder.html',
      restrict: 'E',
      scope: {
        courtorder: '=data',
        urn: '=urn',
        store: '&'
      },
      replace: true,
      link: function postLink(scope) {
        //console.log('courtorder link', [$scope, $element, $attrs]);
        //
        scope.orderTitles = [{
          'value': 'antisocial_behaviour_order',
          'name': 'Antisocial Behaviour Order'
        }, {
          'value': 'application_for_costs_against_convicted_defendant',
          'name': 'Application For Costs Against Convicted Defendant'
        }, {
          'value': 'asbo',
          'name': 'Asbo'
        }, {
          'value': 'bind_over',
          'name': 'Bind Over'
        }, {
          'value': 'bind_over_to_keep_the_peace',
          'name': 'Bind Over To Keep The Peace'
        }, {
          'value': 'breach_of_non_molestation_order',
          'name': 'Breach Of Non Molestation Order'
        }, {
          'value': 'cash_seizure_and_forfeiture_order',
          'name': 'Cash Seizure And Forfeiture Order'
        }, {
          'value': 'civil_disclosure_order',
          'name': 'Civil Disclosure Order'
        }, {
          'value': 'civil_recovery_order',
          'name': 'Civil Recovery Order'
        }, {
          'value': 'closure_notice_for_premesis',
          'name': 'Closure Notice For Premesis'
        }, {
          'value': 'compensation_order',
          'name': 'Compensation Order'
        }, {
          'value': 'confiscation_order',
          'name': 'Confiscation Order'
        }, {
          'value': 'costs',
          'name': 'Costs'
        }, {
          'value': 'criminal_antisocial_behaviour_order ',
          'name': 'Criminal Antisocial Behaviour Order'
        }, {
          'value': 'criminal_behaviour_order',
          'name': 'Criminal Behaviour Order'
        }, {
          'value': 'criminal_proceeds_of_crime_act_disclosure_orders',
          'name': 'Criminal Proceeds Of Crime Act Disclosure Orders'
        }, {
          'value': 'deportation_of_foreign_nation_prisoners',
          'name': 'Deportation Of Foreign Nation Prisoners'
        }, {
          'value': 'deportation_order',
          'name': 'Deportation Order'
        }, {
          'value': 'deprivation_of_property',
          'name': 'Deprivation Of Property'
        }, {
          'value': 'disclosure_notice_for_the_purpose_of_terrorist_investigations',
          'name': 'Disclosure Notice For The Purpose Of Terrorist Investigations'
        }, {
          'value': 'discretionary_driving_disqualification',
          'name': 'Discretionary Driving Disqualification'
        }, {
          'value': 'disqualification_from_working_with_children',
          'name': 'Disqualification From Working With Children'
        }, {
          'value': 'disruption_of_legal_professionals_facilitating_serious_organised_crime',
          'name': 'Disruption Of Legal Professionals Facilitating Serious Organised Crime'
        }, {
          'value': 'dog_control_order',
          'name': 'Dog Control Order'
        }, {
          'value': 'domestic_violence_protection_order',
          'name': 'Domestic Violence Protection Order'
        }, {
          'value': 'drink_banning_order',
          'name': 'Drink Banning Order'
        }, {
          'value': 'enforcement_receivership_order',
          'name': 'Enforcement Receivership Order'
        }, {
          'value': 'european_arrest_warrant',
          'name': 'European Arrest Warrant'
        }, {
          'value': 'european_protection_order',
          'name': 'European Protection Order'
        }, {
          'value': 'exclusion_order_licenced_premesis',
          'name': 'Exclusion Order Licenced Premesis'
        }, {
          'value': 'financial_reporting_order',
          'name': 'Financial Reporting Order'
        }, {
          'value': 'football_banning_order',
          'name': 'Football Banning Order'
        }, {
          'value': 'forced_marriage_protection_order',
          'name': 'Forced Marriage Protection Order'
        }, {
          'value': 'forfeiture_and_destruction_of_dog_order',
          'name': 'Forfeiture And Destruction Of Dog Order'
        }, {
          'value': 'forfeiture_and_destruction_of_drugs_order',
          'name': 'Forfeiture And Destruction Of Drugs Order'
        }, {
          'value': 'forfeiture_and_destruction_of_property',
          'name': 'Forfeiture And Destruction Of Property'
        }, {
          'value': 'forfeiture_and_destruction_of_weapon_order',
          'name': 'Forfeiture And Destruction Of Weapon Order'
        }, {
          'value': 'forfeiture_and_destruction_order',
          'name': 'Forfeiture And Destruction Order'
        }, {
          'value': 'forfeiture_of_indecent_photograph',
          'name': 'Forfeiture Of Indecent Photograph'
        }, {
          'value': 'forfeiture_of_motor_vehicle_order',
          'name': 'Forfeiture Of Motor Vehicle Order'
        }, {
          'value': 'forfeiture_of_obscene_publications',
          'name': 'Forfeiture Of Obscene Publications'
        }, {
          'value': 'immunity_agreements',
          'name': 'Immunity Agreements'
        }, {
          'value': 'interim_receiving_order',
          'name': 'Interim Receiving Order'
        }, {
          'value': 'no_orders_required',
          'name': 'No Orders Required'
        }, {
          'value': 'notification_requirements_sex_offender_register',
          'name': 'Notification Requirements Sex Offender Register'
        }, {
          'value': 'obligatory_driving_disqualification',
          'name': 'Obligatory Driving Disqualification'
        }, {
          'value': 'other',
          'name': 'Other'
        }, {
          'value': 'parental_bind_order',
          'name': 'Parental Bind Order'
        }, {
          'value': 'parenting_order',
          'name': 'Parenting Order'
        }, {
          'value': 'property_freezing_order',
          'name': 'Property Freezing Order'
        }, {
          'value': 'refusal_and_revocation_of_citizenship',
          'name': 'Refusal And Revocation Of Citizenship'
        }, {
          'value': 'restitution_order',
          'name': 'Restitution Order'
        }, {
          'value': 'restraining_order',
          'name': 'Restraining Order'
        }, {
          'value': 'restraint_order',
          'name': 'Restraint Order'
        }, {
          'value': 'restricted_use_publications',
          'name': 'Restricted Use Publications'
        }, {
          'value': 'revocation_of_a_pilots_licence',
          'name': 'Revocation Of A Pilots Licence'
        }, {
          'value': 'sentence_discount_agreement',
          'name': 'Sentence Discount Agreement'
        }, {
          'value': 'serious_crime_prevention_order',
          'name': 'Serious Crime Prevention Order'
        }, {
          'value': 'sopo',
          'name': 'Sopo'
        }, {
          'value': 'travel_restriction_order',
          'name': 'Travel Restriction Order'
        }, {
          'value': 'violent_offender_order',
          'name': 'Violent Offender Order'
        }];

      }
    };
  });
