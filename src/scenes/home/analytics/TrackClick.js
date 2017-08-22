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
    const { onClick } = child.props

    return React.cloneElement(child, {
      onClick: (e, p) => {
        if (onClick) {
          onClick(e, p)
        }

        this.update(this.props)
      },
    })
  },
})
