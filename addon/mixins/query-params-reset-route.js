import Ember from 'ember';

const {
  Mixin
} = Ember;

export default Mixin.create({
  resetController(controller, isExiting) {
    if (isExiting) {
      this.get('_qp.qps').forEach(qp => {
        let defaultValue;

        if (qp.hasOwnProperty('def')) {
          // < v2.0
          defaultValue = qp.def;
        } else {
          // >= v2.0
          defaultValue = qp.defaultValue;
        }

        controller.set(qp.prop, defaultValue);
      });
    }

    this._super(...arguments);
  }
});
