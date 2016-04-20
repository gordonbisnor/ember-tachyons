import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('t-profile-card-description', 'Integration | Component | t profile card description', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-profile-card-description}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#t-profile-card-description}}
      template block text
    {{/t-profile-card-description}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
