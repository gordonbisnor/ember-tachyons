import Ember from 'ember';
import layout from '../templates/components/t-header-nav-right';

export default Ember.Component.extend({
  classNames: [
    'f6', 'fw6', 'ttu', 'tracked', 'tr', 'fr'
  ],
  tagName: 'nav',
  layout
});
