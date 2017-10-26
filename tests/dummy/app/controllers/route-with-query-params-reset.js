import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  queryParams: ['aParam'],
  aParam: false,

  actions: {
    addQueryParam() {
      set(this, 'aParam', true);
    }
  }
});
