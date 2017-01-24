import get from 'ember-metal/get';
import set from 'ember-metal/set';

function getQueryParams(route) {
  return get(route, '_qp.qps');
}

function shouldResetQueryParam(queryParamsToReset, qp) {
  return !queryParamsToReset || queryParamsToReset.indexOf(qp.prop) !== -1;
}

function resetQueryParam(controller, qp) {
  let defaultValue;

  if (qp.hasOwnProperty('def')) {
    // < v2.0
    defaultValue = qp.def;
  } else {
    // >= v2.0
    defaultValue = qp.defaultValue;
  }

  set(controller, qp.prop, defaultValue);
}

export default function(route, optionalArrayOfQueryParams) {
  let controller = get(route, 'controller');
  let qps = getQueryParams(route);

  let queryParamsToReset = optionalArrayOfQueryParams;

  for (let i in qps) {
    if (!Object.hasOwnProperty.call(qps, i)) {
      continue;
    }

    let qp = qps[i];
    if (!shouldResetQueryParam(queryParamsToReset, qp)) {
      continue;
    }

    resetQueryParam(controller, qp);
  }
}
