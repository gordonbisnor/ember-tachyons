import Ember from 'ember';
import TachyonsFontSize from './tachyons-font-size';
import TachyonsFontWeight from './tachyons-font-weight';
import TachyonsOpacity from './tachyons-opacity';
import TachyonsSpacing from './tachyons-spacing';

export default Ember.Mixin.create(TachyonsFontSize, TachyonsFontWeight,
  TachyonsOpacity, TachyonsSpacing, {
});
