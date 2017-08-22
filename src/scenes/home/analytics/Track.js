import React, { Component } from 'react';
import PropTypes from 'prop-types';

import createAnalyticsComponent from './createAnalyticsComponent';

export const Track = createAnalyticsComponent({
    method: 'track',
    propTypes: {
        event: PropTypes.string.isRequired,
    },
    select: ({ children, ...props } = {}) => props,
});

export default Track;
