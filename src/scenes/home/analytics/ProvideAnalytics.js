import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import providerPropType from './providerPropType'

class ProvideAnalytics extends PureComponent {
  static propTypes = {
    provider: PropTypes.oneOfType([providerPropType, PropTypes.array]),
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        listen: PropTypes.func.isRequired,
      }),
    }),
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
          ? console.error(`[ProvideAnalytics] requires a provider to ${key}`)
          : _.invoke(this.props.provider, key, ...args)
    })
  }

  componentDidMount() {
    if (this.props.provider) {
      this.page()
      this.listen()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.provider !== nextProps.provider) {
      if (this.unlisten) {
        this.unlisten()
      }
      if (nextProps.provider) {
      }
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten()
    }
  }

  listen() {
    this.unlisten = this.context.router.history.listen((location, type) => {
      this.page()
    })
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default ProvideAnalytics
export { ProvideAnalytics }
