import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  queryParams: ['aParam'],
  aParam: false,

  actions: {
    addQueryParam() {
      set(this, 'aParam', true);
    }
  }
});
