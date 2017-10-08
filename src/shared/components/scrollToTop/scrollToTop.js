import { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class scrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

scrollToTop.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(scrollToTop);
