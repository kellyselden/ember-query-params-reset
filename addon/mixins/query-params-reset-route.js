import Ember from 'ember';

const {
  Mixin
} = Ember;

export default Mixin.create({
  resetController(controller, isExiting) {
    if (isExiting) {
      this.get('_qp.qps').forEach(({ prop, def }) => {
        controller.set(prop, def);
      });
    }
  }
});
