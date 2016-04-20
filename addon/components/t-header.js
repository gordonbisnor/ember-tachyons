import Ember from 'ember';
import Tachyons from '../mixins/tachyons';
import layout from '../templates/components/t-header';

export default Ember.Component.extend(Tachyons, {
  defaultSpacing: {
    padding: 3,
    'padding-ns': 4
  },

  tagName: 'header',
  layout,
});
