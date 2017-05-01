import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.css';

class NavItem extends PureComponent {
  render() {
    return (
      <Link className={styles.navItem} to={this.props.to}>
        {this.props.text}
      </Link>
    );
  }
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavItem;
