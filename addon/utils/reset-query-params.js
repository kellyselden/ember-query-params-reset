import { get, set } from '@ember/object';

function getQueryParams(route) {
  return get(route, '_qp.qps');
}

function shouldResetQueryParam(queryParamsToReset, qp) {
  return !queryParamsToReset || queryParamsToReset.indexOf(qp.prop) !== -1;
}

function resetQueryParam(controller, qp) {
  set(controller, qp.prop, qp.defaultValue);

  return qp.defaultValue;
}

export default function resetQueryParams(route, optionalArrayOfQueryParams) {
  let controller = get(route, 'controller');
  let qps = getQueryParams(route);

  let queryParamsToReset = optionalArrayOfQueryParams;

  let defaultValues = {};

  for (let i in qps) {
    if (!Object.hasOwnProperty.call(qps, i)) {
      continue;
    }

    let qp = qps[i];
    if (!shouldResetQueryParam(queryParamsToReset, qp)) {
      continue;
    }

    let defaultValue = resetQueryParam(controller, qp);

    defaultValues[qp.prop] = defaultValue;
  }

  return defaultValues;
}
