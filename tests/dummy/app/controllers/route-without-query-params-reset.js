import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  queryParams: ['aParam'],

  actions: {
    addQueryParam() {
      set(this, 'aParam', 'test');
    }
  }
});
