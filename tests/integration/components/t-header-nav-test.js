import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('t-header-nav', 'Integration | Component | t header nav', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#t-header-nav}}
      template block text
    {{/t-header-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
