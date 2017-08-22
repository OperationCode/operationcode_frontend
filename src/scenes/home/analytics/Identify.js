import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import providerPropType from './providerPropType'

class Identify extends PureComponent {
  static contextTypes = {
    analytics: providerPropType.isRequired,
  }

  static propTypes = {
    id: PropTypes.string,
  }

  componentDidMount() {
    const { children, ...traits } = this.props
    this.identify(traits)
  }

  componentWillReceiveProps(nextProps) {
    const { children, ...traits } = nextProps
    if (traits.id !== this.props.id) {
      this.identify(traits)
    }
  }

  identify({ id, userId = id, ...traits }) {
    this.context.analytics.identify(traits)
  }

  render() {
    return this.props.children ? React.Children.only(this.props.children) : null
  }
}

export default Identify
export { Identify }
