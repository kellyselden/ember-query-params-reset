import { click, currentURL, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | route with query params reset', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /route-with-query-params-reset', async function(assert) {
    await visit('/route-with-query-params-reset');

    assert.equal(currentURL(), '/route-with-query-params-reset');

    await click('button');

    assert.equal(currentURL(), '/route-with-query-params-reset?aParam=true');

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('#route-with-query-params-reset');

    assert.equal(currentURL(), '/route-with-query-params-reset');
  });
});
