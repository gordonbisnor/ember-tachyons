import Ember from 'ember';
import TachyonsSpacingMixin from 'ember-tachyons/mixins/tachyons-spacing';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons spacing');

test('binds attrs to classes', function(assert) {
  let TachyonsSpacingObject = Ember.Object.extend(TachyonsSpacingMixin);
  let subject = TachyonsSpacingObject.create();

  subject.set('marginBottom', 5);
  subject.set('marginBottom-m', '6');
  subject.set('margin', 0);

  subject.set('paddingTop', 6);
  subject.set('paddingRight-ns', 0);

  assert.equal(subject.get('spacingCx'), 'ma0 mb5 mb6-m pt6 pr0-ns');
});
