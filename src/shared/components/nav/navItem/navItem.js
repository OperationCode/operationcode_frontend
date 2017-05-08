import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.css';

class NavItem extends PureComponent {

  constructor() {
    super();

    // remove this if .eslintrc updated to parser:"babel-eslint", allowing class methods as => fns
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.isExternal) {
      return;
    }

    window.location(this.props.to);
  }

  render() {
    return (
      <Link className={styles.navItem} to={this.props.to} onClick={this.handleClick}>
        {this.props.text}
      </Link>
    );
  }
}

NavItem.propTypes = {
  isExternal: PropTypes.bool,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  isExternal: false
};

export default NavItem;
