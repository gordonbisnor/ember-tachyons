import Ember from 'ember';
import layout from '../templates/components/t-profile-card';

export default Ember.Component.extend({
  classNames: [
    'br2', 'ba', 'b--black-10', 'pa3', 'pa4-ns'
  ],
  tagName: 'article',
  layout
});
