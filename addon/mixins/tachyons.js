import Ember from 'ember';

export default Ember.Mixin.create({
  f: null,
  fNs: null,
  fM: null,
  fL: null,

  classNameBindings: [
    'fontSize'
  ],

  fontSize: Ember.computed('f', 'fNs', function() {
    const f = this.get('f');
    const fNs = this.get('fNs');

    const cx = [];

    if (Ember.isPresent(f)) {
      cx.push('f' + f);
    }

    if (Ember.isPresent(fNs)) {
      cx.push('f' + fNs + '-ns');
    }

    return cx.join(' ');
  })
});

