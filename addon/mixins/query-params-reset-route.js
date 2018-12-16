import Mixin from '@ember/object/mixin';
import resetQueryParams from '../utils/reset-query-params';

export default Mixin.create({
  resetController(controller, isExiting) {
    if (isExiting) {
      resetQueryParams(this);
    }

    this._super(...arguments);
  }
});
