import Ember from 'ember';
import QueryParamsResetRouteMixin from 'ember-query-params-reset/mixins/query-params-reset-route';
import { module, test } from 'qunit';

let controller;
let subject;

module('Unit | Mixin | query params reset route', {
  beforeEach() {
    controller = Ember.Object.create({
      myParam: 'testValue',
      nonQueryParam: 'testValue'
    });
    let qp = {
      qps: [
        {
          prop: 'myParam',
          def: 'testDefaultValue'
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

  assert.equal(controller.get('myParam'), 'testValue');
});

test('it resets params on exit', function(assert) {
  let isExiting = true;

  subject.resetController(controller, isExiting);

  assert.equal(controller.get('myParam'), 'testDefaultValue');
});

test('it doesn\t reset non query param properties', function(assert) {
  let isExiting = true;

  subject.resetController(controller, isExiting);

  assert.equal(controller.get('nonQueryParam'), 'testValue');
});
