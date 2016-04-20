import Ember from 'ember';
import layout from '../templates/components/t-header-nav';

export default Ember.Component.extend({
  classNames: [
    'f6', 'fw6', 'ttu', 'tracked'
  ],
  tagName: 'nav',
  layout
});
