import Ember from 'ember';
import TachyonsSpacingMixin from 'ember-tachyons/mixins/tachyons-spacing';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons spacing');

// Replace this with your real tests.
test('it works', function(assert) {
  let TachyonsSpacingObject = Ember.Object.extend(TachyonsSpacingMixin);
  let subject = TachyonsSpacingObject.create();
  assert.ok(subject);
});
