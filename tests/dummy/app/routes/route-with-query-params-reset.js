import Ember from 'ember';
import QueryParamsResetRouteMixin from 'ember-query-params-reset/mixins/query-params-reset-route';

const {
  Route
} = Ember;

export default Route.extend(QueryParamsResetRouteMixin);
