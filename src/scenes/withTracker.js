import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-75642413-1');

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      trackPage(this.props.location.pathname); // eslint-disable-line
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
