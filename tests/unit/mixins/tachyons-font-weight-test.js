import Ember from 'ember';
import TachyonsFontWeightMixin from 'ember-tachyons/mixins/tachyons-font-weight';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons font weight');

test('binds attrs to classes', function(assert) {
  let TachyonsFontWeightObject = Ember.Object.extend(TachyonsFontWeightMixin);
  let subject = TachyonsFontWeightObject.create();

  subject.set('fontWeight', 3);
  subject.set('fontWeight-l', 9);
  subject.set('fontWeight-ns', 'bold');

  assert.equal(subject.get('fontWeightCx'), 'fw3 b-ns fw9-l');
});

test('ignores unknown values', function(assert) {
  let TachyonsFontWeightObject = Ember.Object.extend(TachyonsFontWeightMixin);
  let subject = TachyonsFontWeightObject.create();

  subject.set('fontWeight-l', 10);
  subject.set('fontWeight-ns', 'bld');

  assert.equal(subject.get('fontWeightCx'), '');
});
