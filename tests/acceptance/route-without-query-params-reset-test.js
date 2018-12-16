import { click, currentURL, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | route without query params reset', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /route-without-query-params-reset', async function(assert) {
    await visit('/route-without-query-params-reset');

    assert.equal(currentURL(), '/route-without-query-params-reset');

    await click('button');

    assert.equal(currentURL(), '/route-without-query-params-reset?aParam=true');

    await visit('/');

    assert.equal(currentURL(), '/');

    await click('#route-without-query-params-reset');

    assert.equal(currentURL(), '/route-without-query-params-reset?aParam=true');
  });
});
