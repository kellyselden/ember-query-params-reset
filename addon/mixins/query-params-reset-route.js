import Mixin from 'ember-metal/mixin';
import resetQueryParams from '../utils/reset-query-params';

export default Mixin.create({
  resetController(controller, isExiting) {
    if (isExiting) {
      resetQueryParams(this);
    }

    this._super(...arguments);
  }
});
