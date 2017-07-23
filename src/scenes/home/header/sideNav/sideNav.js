import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from 'images/logos/small-white-logo.png';
import Drawer from './drawer/drawer';
import styles from './sideNav.css';

class SideNav extends Component {
  render() {
    const { isVisible } = this.props;
    return (
      <Drawer isVisible={isVisible}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              <a className={styles.close} href="/" onClick={this.props.onClose}>&#10006;</a>
            </div>
            <a className={styles.logoWrapper} href="/">
              <img className={styles.logo} src={logo} alt="Operation Code logo" />
            </a>
          </div>
          <div className={styles.list}>
            {this.props.children}
          </div>
        </div>
      </Drawer>
    );
  }
}

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

SideNav.defaultProps = {
  isVisible: false,
  onClose: () => {}
};

export default SideNav;
