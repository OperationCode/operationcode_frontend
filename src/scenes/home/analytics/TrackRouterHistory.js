import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import providerPropType from './providerPropType'

class TrackRouterHistory extends PureComponent {
  static contextTypes = {
    analytics: providerPropType.isRequired,
    router: PropTypes.shape({
      history: PropTypes.shape({
        listen: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  }

  componentDidMount() {
    if (this.context.analytics) {
      this.context.analytics.page()
      this.listen(this.context)
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (
      this.context.analytics !== nextContext.analytics ||
      this.context.router.history !== nextContext.router.history
    ) {
      if (this.unlisten) {
        this.unlisten()
      }
      if (nextContext.analytics) {
        this.listen(nextContext)
      }
    }
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten()
    }
  }

  listen({ router, analytics }) {
    this.unlisten = router.history.listen((location, type) => {
      analytics.page()
    })
  }

  unlisten() {
    console.error('<TrackRouterHistory::unlisten/> there is no listener')
  }

  render() {
    return this.props.children ? React.Children.only(this.props.children) : null
  }
}

export default TrackRouterHistory
export { TrackRouterHistory }
