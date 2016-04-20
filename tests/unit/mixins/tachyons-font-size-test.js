import Ember from 'ember';
import TachyonsFontSizeMixin from 'ember-tachyons/mixins/tachyons-font-size';
import { module, test } from 'qunit';

module('Unit | Mixin | tachyons font size');

test('binds attrs to classes', function(assert) {
  let TachyonsFontSizeObject = Ember.Object.extend(TachyonsFontSizeMixin);
  let subject = TachyonsFontSizeObject.create();

  subject.set('fontSize', 2);
  subject.set('fontSize-ns', 3);
  subject.set('fontSize-m', 'subheadline');
  subject.set('fontSize-l', 'headline');
  assert.equal(subject.get('fontSizeCx'), 'f2 f3-ns f-subheadline-m f-headline-l');
});

test('ignores unknown values', function(assert) {
  let TachyonsFontSizeObject = Ember.Object.extend(TachyonsFontSizeMixin);
  let subject = TachyonsFontSizeObject.create();

  subject.set('fontSize-l', 'foobar');
  assert.equal(subject.get('fontSizeCx'), '');
});
