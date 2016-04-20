import Ember from 'ember';
import layout from '../templates/components/t-header';

export default Ember.Component.extend({
  classNames: [
    'bg-near-white', 'pa3', 'pv4-ns', 'ph4-m', 'ph5-l'
  ],
  tagName: 'header',
  layout
});
