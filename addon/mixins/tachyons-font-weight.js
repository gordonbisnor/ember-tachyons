import Ember from 'ember';

export default Ember.Mixin.create({
  fontWeight: null,
  'fontWeight-ns': null,
  'fontWeight-m': null,
  'fontWeight-l': null,

  classNameBindings: [
    'fontWeightCx'
  ],

  fontWeightCx: Ember.computed('fontWeight', 'fontWeight-ns', 'fontWeight-m', 'fontWeight-l', function() {
    const cx = [];

    const f = this.get('fontWeight');
    const fNs = this.get('fontWeight-ns');
    const fM = this.get('fontWeight-m');
    const fL = this.get('fontWeight-l');

    if (Ember.isPresent(f) && isKnownFontWeightValue(f)) { cx.push(getFontWeightClass(f)); }
    if (Ember.isPresent(fNs) && isKnownFontWeightValue(fNs)) { cx.push(getFontWeightClass(fNs, 'ns')); }
    if (Ember.isPresent(fM) && isKnownFontWeightValue(fM)) { cx.push(getFontWeightClass(fM, 'm')); }
    if (Ember.isPresent(fL) && isKnownFontWeightValue(fL)) { cx.push(getFontWeightClass(fL, 'l')); }

    return cx.join(' ');
  })
});

function getFontWeightClass(value, mq) {
  let klass = 'fw';

  if (value === 'bold') {
    klass = 'b';
  } else if(value === 'normal') {
    klass = 'normal';
  } else {
    klass += value;
  }

  if (Ember.isPresent(mq)) {
    klass += '-' + mq;
  }

  return klass;
}

function isKnownFontWeightValue(value) {
  const knownValues = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    bold: true,
    normal: true
  };

  return Ember.isPresent(value) && knownValues[value];
}
