import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  children: React.PropTypes.func.isRequired,
  location: React.PropTypes.func.isRequired,
};

export default withRouter(ScrollToTop);
