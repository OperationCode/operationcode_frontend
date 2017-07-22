import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './topNav.css';

class TopNav extends PureComponent {
  render() {
    return (
      <div className={styles.topNav} >
        {this.props.children}
      </div>
    );
  }
}

TopNav.propTypes = {
  children: PropTypes.node.isRequired
};

export default TopNav;
