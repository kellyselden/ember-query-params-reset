# ember-query-params-reset

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-query-params-reset.svg)](https://greenkeeper.io/)

[![npm version](https://badge.fury.io/js/ember-query-params-reset.svg)](https://badge.fury.io/js/ember-query-params-reset)
[![Build Status](https://travis-ci.org/kellyselden/ember-query-params-reset.svg?branch=master)](https://travis-ci.org/kellyselden/ember-query-params-reset)

Automatically reset all query params when leaving a route

## Demo

http://kellyselden.github.io/ember-query-params-reset

## Installation

`ember install ember-query-params-reset`

## Usage

```js
import Ember from 'ember';
import QueryParamsResetRouteMixin from 'ember-query-params-reset/mixins/query-params-reset-route';

export default Ember.Route.extend(QueryParamsResetRouteMixin, {
  // the rest of your logic
});
```
