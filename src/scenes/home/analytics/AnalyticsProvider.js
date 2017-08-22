import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import providerPropType from './providerPropType'

class AnalyticsProvider extends PureComponent {
  static propTypes = {
    provider: PropTypes.oneOfType([providerPropType, PropTypes.array]),
  }

  static childContextTypes = {
    analytics: providerPropType,
  }

  state = {}

  getChildContext() {
    return {
      analytics: this,
    }
  }

  componentWillMount() {
    ;['identify', 'track', 'page', 'screen', 'group', 'alias'].map(key => {
      this[key] = (...args) =>
        !this.props.provider
          ? console.error(`[AnalyticsProvider] requires a provider to ${key}`)
          : _.invoke(this.props.provider, key, ...args)
    })
  }

  componentWillUnmount() {
    // delete global analytics object?
    // provide destroy hook?
    // this.props.destroy();
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default AnalyticsProvider
export { AnalyticsProvider }
