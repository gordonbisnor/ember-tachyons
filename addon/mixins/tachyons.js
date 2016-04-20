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
    if (Ember.isPresent(f) && isKnownFontValue(f)) { cx.push('f' + f); }
    if (Ember.isPresent(fNs) && isKnownFontValue(fNs)) { cx.push('f' + fNs + '-ns'); }
    if (Ember.isPresent(fM) && isKnownFontValue(fM)) { cx.push('f' + fM + '-m'); }
    if (Ember.isPresent(fL) && isKnownFontValue(fL)) { cx.push('f' + fL + '-l'); }

    return cx.join(' ');
  })
});

function isKnownFontValue (value) {
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
