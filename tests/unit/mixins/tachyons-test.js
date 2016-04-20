import Ember from 'ember';
import TachyonsMixin from 'ember-tachyons/mixins/tachyons';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons');

test('it correctly handles fontSize', function(assert) {
  let TachyonsObject = Ember.Object.extend(TachyonsMixin);
  let subject = TachyonsObject.create();

  subject.set('fontSize', 2);
  subject.set('fontSize-ns', 3);
  assert.equal(subject.get('fontSizeCx'), 'f2 f3-ns');
  assert.ok(subject);

  subject.set('fontSize-l', 'foobar');
  assert.equal(subject.get('fontSizeCx'), 'f2 f3-ns');
});
