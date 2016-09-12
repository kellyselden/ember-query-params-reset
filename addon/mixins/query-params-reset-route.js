import Ember from 'ember';

const {
  Mixin,
  get, set
} = Ember;

export default Mixin.create({
  resetController(controller, isExiting) {
    if (isExiting) {
      get(this, '_qp.qps').forEach(qp => {
        let defaultValue;

        if (qp.hasOwnProperty('def')) {
          // < v2.0
          defaultValue = qp.def;
        } else {
          // >= v2.0
          defaultValue = qp.defaultValue;
        }

        set(controller, qp.prop, defaultValue);
      });
    }

    this._super(...arguments);
  }
});
