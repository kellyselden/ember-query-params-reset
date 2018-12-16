import resetQueryParams from 'ember-query-params-reset/utils/reset-query-params';
import { module, test } from 'qunit';
import createRoute from '../../helpers/create-route';

let controller;
let subject;

module('Unit | Utility | reset query params', function(hooks) {
  hooks.beforeEach(function() {
    subject = createRoute();
    controller = subject.get('controller');
  });

  test('it resets all params', function(assert) {
    let defaultValues = resetQueryParams(subject);

    assert.strictEqual(controller.get('myParam1'), 'test default value 1');
    assert.strictEqual(controller.get('myParam2'), undefined);
    assert.strictEqual(controller.get('nonQueryParam'), 'test value 3');
    assert.deepEqual(defaultValues, {
      myParam1: 'test default value 1',
      myParam2: undefined
    });
  });

  test('it resets some params', function(assert) {
    let defaultValues = resetQueryParams(subject, ['myParam1']);

    assert.strictEqual(controller.get('myParam1'), 'test default value 1');
    assert.strictEqual(controller.get('myParam2'), 'test value 2');
    assert.strictEqual(controller.get('nonQueryParam'), 'test value 3');
    assert.deepEqual(defaultValues, {
      myParam1: 'test default value 1'
    });
  });
});
