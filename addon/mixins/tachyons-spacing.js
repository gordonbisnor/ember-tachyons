import Ember from 'ember';

export default Ember.Mixin.create({
  margin: null,
  marginTop: null,
  marginLeft: null,
  marginRight: null,
  marginBottom: null,
  'margin-ns': null,
  'marginTop-ns': null,
  'marginLeft-ns': null,
  'marginRight-ns': null,
  'marginBottom-ns': null,
  'margin-m': null,
  'marginTop-m': null,
  'marginLeft-m': null,
  'marginRight-m': null,
  'marginBottom-m': null,
  'margin-l': null,
  'marginTop-l': null,
  'marginLeft-l': null,
  'marginRight-l': null,
  'marginBottom-l': null,
  padding: null,
  paddingTop: null,
  paddingLeft: null,
  paddingRight: null,
  paddingBottom: null,
  'padding-ns': null,
  'paddingTop-ns': null,
  'paddingLeft-ns': null,
  'paddingRight-ns': null,
  'paddingBottom-ns': null,
  'padding-m': null,
  'paddingTop-m': null,
  'paddingLeft-m': null,
  'paddingRight-m': null,
  'paddingBottom-m': null,
  'padding-l': null,
  'paddingTop-l': null,
  'paddingLeft-l': null,
  'paddingRight-l': null,
  'paddingBottom-l': null,

  classNameBindings: [
    'spacingCx'
  ],

  spacingCx: Ember.computed(
    'margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom',
    'margin-ns', 'marginTop-ns', 'marginLeft-ns', 'marginRight-ns', 'marginBottom-ns',
    'margin-m', 'marginTop-m', 'marginLeft-m', 'marginRight-m', 'marginBottom-m',
    'margin-l', 'marginTop-l', 'marginLeft-l', 'marginRight-l', 'marginBottom-l',
    'padding', 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom',
    'padding-ns', 'paddingTop-ns', 'paddingLeft-ns', 'paddingRight-ns', 'paddingBottom-ns',
    'padding-m', 'paddingTop-m', 'paddingLeft-m', 'paddingRight-m', 'paddingBottom-m',
    'padding-l', 'paddingTop-l', 'paddingLeft-l', 'paddingRight-l', 'paddingBottom-l', function() {
      const cx = [];

      [
        'margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom',
        'margin-ns', 'marginTop-ns', 'marginLeft-ns', 'marginRight-ns', 'marginBottom-ns',
        'margin-m', 'marginTop-m', 'marginLeft-m', 'marginRight-m', 'marginBottom-m',
        'margin-l', 'marginTop-l', 'marginLeft-l', 'marginRight-l', 'marginBottom-l',
        'padding', 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom',
        'padding-ns', 'paddingTop-ns', 'paddingLeft-ns', 'paddingRight-ns', 'paddingBottom-ns',
        'padding-m', 'paddingTop-m', 'paddingLeft-m', 'paddingRight-m', 'paddingBottom-m',
        'padding-l', 'paddingTop-l', 'paddingLeft-l', 'paddingRight-l', 'paddingBottom-l'
      ].forEach((spacingAttr) => {
        const val = this.get(spacingAttr);

        const mq = spacingAttr.split('-')[1];
        if (isKnownSpacingValue(val)) {
          cx.push(getSpacingClass(spacingAttr, val, mq);
        }
      })

      return cx.join(' ');
    }
});

function getSpacingClass(marginOrPadding, value, mq) {
  
}

function isKnownSpacingValue(value) {
  const knownValues = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true
  };

  return Ember.isPresent(value) && knownValues[value];
}
