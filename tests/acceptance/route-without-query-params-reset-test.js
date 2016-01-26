import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | route without query params reset');

test('visiting /route-without-query-params-reset', function(assert) {
  visit('/route-without-query-params-reset');

  andThen(function() {
    assert.equal(currentURL(), '/route-without-query-params-reset');
  });

  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/route-without-query-params-reset?aParam=true');
  });

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  click('#route-without-query-params-reset');

  andThen(function() {
    assert.equal(currentURL(), '/route-without-query-params-reset?aParam=true');
  });
});
