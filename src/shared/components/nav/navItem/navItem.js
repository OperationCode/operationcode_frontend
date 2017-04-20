import React, { Component } from 'react';
import styles from './navItem.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavItem extends Component {

  render() {
    return (
      <Link className={styles.navItem} to={this.props.to}>{this.props.text}
      </Link>
    );
  }
}

NavItem.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
}

export default NavItem;
