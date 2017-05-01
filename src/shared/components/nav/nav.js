import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      scrollPosition: window.scrollTop,
      windowPosition: window.pageYOffset,
      mobileNavVisible: false,
      navClasses: classNames({ nav_container: true, nav_pinch: false })
    };
  }
  render() {
    return (
      <div className={`${this.props.className} ${styles.nav}`}>
        {this.props.children}
      </div>
    );
  }
}

Nav.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string.isRequired
};

export default Nav;
