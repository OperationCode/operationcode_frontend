import React, { Component } from 'react'
import PropTypes from 'prop-types'

import createAnalyticsComponent from './createAnalyticsComponent'

export const TrackTouchTap = createAnalyticsComponent({
  method: 'track',
  propTypes: {
    event: PropTypes.string.isRequired,
  },
  select: ({ children, ...props } = {}) => props,
  render() {
    const child = React.Children.only(this.props.children)
    const { onTouchTap } = child.props

    return React.cloneElement(child, {
      onTouchTap: (e, p) => {
        if (onTouchTap) {
          onTouchTap(e, p)
        }

        this.update(this.props)
      },
    })
  },
})
