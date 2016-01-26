import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | route with query params reset');

test('visiting /route-with-query-params-reset', function(assert) {
  visit('/route-with-query-params-reset');

  andThen(function() {
    assert.equal(currentURL(), '/route-with-query-params-reset');
  });

  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/route-with-query-params-reset?aParam=true');
  });

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  click('#route-with-query-params-reset');

  andThen(function() {
    assert.equal(currentURL(), '/route-with-query-params-reset');
  });
});
