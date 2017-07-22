import React, { Component } from 'react';
import Nav from 'shared/components/nav/nav';
import PropTypes from 'prop-types';
import styles from './topNav.css';

class TopNav extends Component {
  render() {
    return (
      <Nav className={styles.topNav} >
        {this.props.children}
      </Nav>
    );
  }
}

TopNav.propTypes = {
  children: PropTypes.node.isRequired
};

export default TopNav;
