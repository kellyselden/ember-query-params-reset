import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('route-without-query-params-reset');
  this.route('route-with-query-params-reset');
});

export default Router;
