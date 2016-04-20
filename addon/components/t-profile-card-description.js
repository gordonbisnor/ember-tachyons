import Ember from 'ember';
import layout from '../templates/components/t-profile-card-description';

export default Ember.Component.extend({
  classNames: [
    'lh-copy', 'measure', 'black-70', 'tl', 'f6'
  ],
  tagName: 'p',
  layout
});
