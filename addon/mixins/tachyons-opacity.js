import Ember from 'ember';

export default Ember.Mixin.create({
  opacity: null,
  'opacity-ns': null,
  'opacity-m': null,
  'opacity-l': null,

  classNameBindings: [
    'opacityCx'
  ],

  opacityCx: Ember.computed('opacity', 'opacity-ns', 'opacity-m', 'opacity-l', function() {
    const cx = [];

    const o = this.get('opacity');
    const oNs = this.get('opacity-ns');
    const oM = this.get('opacity-m');
    const oL = this.get('opacity-l');

    if (isKnownOpacityValue(o)) { cx.push('o-' + o); }
    if (isKnownOpacityValue(oNs)) { cx.push('o-' + oNs + '-ns'); }
    if (isKnownOpacityValue(oM)) { cx.push('o-' + oM + '-m'); }
    if (isKnownOpacityValue(oL)) { cx.push('o-' + oL + '-l'); }

    return cx.join(' ');
  })
});

function isKnownOpacityValue(value) {
  const knownValues = {
    10: true,
    20: true,
    30: true,
    40: true,
    50: true,
    60: true,
    70: true,
    80: true,
    90: true,
    100: true
  };

  return Ember.isPresent(value) && knownValues[value];
}
