import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('t-flag-object-image', 'Integration | Component | t flag object image', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-flag-object-image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#t-flag-object-image}}
      template block text
    {{/t-flag-object-image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
