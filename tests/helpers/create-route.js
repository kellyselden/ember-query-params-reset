import EmberObject from '@ember/object';
import QueryParamsResetRouteMixin from 'ember-query-params-reset/mixins/query-params-reset-route';

const QueryParamsResetRoute = EmberObject.extend(QueryParamsResetRouteMixin);

export default function createRoute() {
  let controller = EmberObject.create({
    myParam1: 'test value 1',
    myParam2: 'test value 2',
    nonQueryParam: 'test value 3'
  });
  let qp = {
    qps: [
      {
        prop: 'myParam1',
        defaultValue: 'test default value 1'
      },
      {
        prop: 'myParam2'
      }
    ]
  };
  return QueryParamsResetRoute.create({
    controller,
    _qp: qp
  });
}
