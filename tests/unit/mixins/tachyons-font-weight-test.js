import Ember from 'ember';
import TachyonsFontWeightMixin from 'ember-tachyons/mixins/tachyons-font-weight';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons font weight');

// Replace this with your real tests.
test('it works', function(assert) {
  let TachyonsFontWeightObject = Ember.Object.extend(TachyonsFontWeightMixin);
  let subject = TachyonsFontWeightObject.create();
  assert.ok(subject);
});
