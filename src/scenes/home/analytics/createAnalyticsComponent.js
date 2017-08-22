import { assign, every, get, isFunction, isMatch, isObject, keys, mapValues, pick } from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import providerPropType from './providerPropType'

export function createAnalyticsComponent({
  contextTypes,
  method = 'track',
  options,
  propTypes,
  select,
  shouldComponentUpdate,
  ...rest
}) {
  if (!select) {
    select = (props, context) => pick(props, keys(propTypes))
  } else if (isObject(select) && !isFunction(select)) {
    const paths = select
    select = (props, context) => mapValues(paths, path => get(props, path) || get(context, path))
  }

  if (!shouldComponentUpdate) {
    shouldComponentUpdate = function(nextProps, nextContext) {
      let prev = select(this.props, this.context)
      let next = select(nextProps, nextContext)

      if (!nextProps) {
        next = prev
        prev = {}
      }

      return every(next, value => !!value) && !isMatch(next, prev)
    }
  }

  class AnalyticsComponent extends Component {
    static propTypes = propTypes

    static contextTypes = {
      analytics: providerPropType.isRequired,
      analyticsEventProperties: PropTypes.object,
      ...(contextTypes || {}),
    }

    componentDidMount() {
      if (this.shouldUpdate()) {
        this.update(this.props, this.context)
      }
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if (this.shouldUpdate(nextProps, nextContext)) {
        this.update(nextProps, nextContext)
      }
    }

    shouldUpdate = shouldComponentUpdate.bind(this)

    update = (props, context) => this.context.analytics[method](select(props, context), options)

    render() {
      return this.props.children || null
    }
  }

  assign(AnalyticsComponent.prototype, rest)

  return AnalyticsComponent
}

export default createAnalyticsComponent
