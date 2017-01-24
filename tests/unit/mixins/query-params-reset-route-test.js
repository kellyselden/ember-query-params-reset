import { module, test } from 'qunit';
import createRoute from '../../helpers/create-route';

let controller;
let subject;

module('Unit | Mixin | query params reset route', {
  beforeEach() {
    subject = createRoute();
    controller = subject.get('controller');
  }
});

test('it does nothing if not exiting', function(assert) {
  let isExiting = false;

  subject.resetController(controller, isExiting);

  assert.strictEqual(controller.get('myParam1'), 'test value 1');
  assert.strictEqual(controller.get('myParam2'), 'test value 2');
  assert.strictEqual(controller.get('myParam3'), 'test value 3');
  assert.strictEqual(controller.get('nonQueryParam'), 'test value 4');
});

test('it resets params on exit', function(assert) {
  let isExiting = true;

  subject.resetController(controller, isExiting);

  assert.strictEqual(controller.get('myParam1'), 'test default value 1');
  assert.strictEqual(controller.get('myParam2'), 'test default value 2');
  assert.strictEqual(controller.get('myParam3'), undefined);
  assert.strictEqual(controller.get('nonQueryParam'), 'test value 4');
});
