import Ember from 'ember';
import QueryParamsResetRouteMixin from 'ember-query-params-reset/mixins/query-params-reset-route';
import { module, test } from 'qunit';

let controller;
let subject;

module('Unit | Mixin | query params reset route', {
  beforeEach() {
    controller = Ember.Object.create({
      myParam: 'test value',
      nonQueryParam: 'test value'
    });
    let qp = {
      qps: [
        {
          prop: 'myParam',
          defaultValue: 'test default value'
        }
      ]
    };
    let QueryParamsResetRoute = Ember.Object.extend(QueryParamsResetRouteMixin, {
      controller,
      _qp: qp
    });
    subject = QueryParamsResetRoute.create();
  }
});

test('it does nothing if not exiting', function(assert) {
  let isExiting = false;

  subject.resetController(controller, isExiting);

  assert.equal(controller.get('myParam'), 'test value');
});

test('it resets params on exit < v2.0', function(assert) {
  let isExiting = true;

  subject.get('_qp.qps')[0].def = '< v2.0 default value';

  subject.resetController(controller, isExiting);

  assert.equal(controller.get('myParam'), '< v2.0 default value');
});

test('it resets params on exit', function(assert) {
  let isExiting = true;

  subject.resetController(controller, isExiting);

  assert.equal(controller.get('myParam'), 'test default value');
});

test('it doesn\'t reset non query param properties', function(assert) {
  let isExiting = true;

  subject.resetController(controller, isExiting);

  assert.equal(controller.get('nonQueryParam'), 'test value');
});