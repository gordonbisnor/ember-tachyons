import Ember from 'ember';
import TachyonsOpacityMixin from 'ember-tachyons/mixins/tachyons-opacity';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons opacity');

// Replace this with your real tests.
test('it works', function(assert) {
  let TachyonsOpacityObject = Ember.Object.extend(TachyonsOpacityMixin);
  let subject = TachyonsOpacityObject.create();
  assert.ok(subject);
});
