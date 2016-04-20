import Ember from 'ember';

export default Ember.Mixin.create({
  fontSize: null,
  'fontSize-ns': null,
  'fontSize-m': null,
  'fontSize-l': null,

  classNameBindings: [
    'fontSizeCx'
  ],

  fontSizeCx: Ember.computed('fontSize', 'fontSize-ns', 'fontSize-m', 'fontSize-l', function() {
    const cx = [];

    const f = this.get('fontSize');
    const fNs = this.get('fontSize-ns');
    const fM = this.get('fontSize-m');
    const fL = this.get('fontSize-l');

    // TODO: Validate the values, log error if unknown parameter (like 7)
    if (Ember.isPresent(f) && isKnownFontSizeValue(f)) { cx.push(getFontSizeClass(f)); }
    if (Ember.isPresent(fNs) && isKnownFontSizeValue(fNs)) { cx.push(getFontSizeClass(fNs, 'ns')); }
    if (Ember.isPresent(fM) && isKnownFontSizeValue(fM)) { cx.push(getFontSizeClass(fM, 'm')); }
    if (Ember.isPresent(fL) && isKnownFontSizeValue(fL)) { cx.push(getFontSizeClass(fL, 'l')); }

    return cx.join(' ');
  })
});

function getFontSizeClass(value, mq) {
  let klass = 'f';

  if (value === 'subheadline' || value === 'headline') {
    klass += '-';
  }

  klass += value;

  if (Ember.isPresent(mq)) {
    klass += '-' + mq;
  }

  return klass;
}

function isKnownFontSizeValue(value) {
  const knownValues = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    headline: true,
    subheadline: true
  };

  return Ember.isPresent(value) && knownValues[value];
}
