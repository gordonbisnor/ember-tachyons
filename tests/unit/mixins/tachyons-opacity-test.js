import Ember from 'ember';
import TachyonsOpacityMixin from 'ember-tachyons/mixins/tachyons-opacity';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons opacity');

test('binds attrs to classes', function(assert) {
  let TachyonsOpacityObject = Ember.Object.extend(TachyonsOpacityMixin);
  let subject = TachyonsOpacityObject.create();

  subject.set('opacity', 10);
  subject.set('opacity-m', '90');

  assert.equal(subject.get('opacityCx'), 'o-10 o-90-m');
});

test('ignores unkown values', function(assert) {
  let TachyonsOpacityObject = Ember.Object.extend(TachyonsOpacityMixin);
  let subject = TachyonsOpacityObject.create();

  subject.set('opacity', 101);
  assert.equal(subject.get('opacityCx'), '');
});
