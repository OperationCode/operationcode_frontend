import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.css';

class NavItem extends PureComponent {

  constructor() {
    super();

    // TODO: remove this if .eslintrc updated to parser:"babel-eslint",
    // allowing class methods as => fns
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.isExternal) {
      return;
    }

    window.location(this.props.to);
  }

  render() {
    const disabledClass = this.props.notClickable ? styles.disabledNavItem : '';
    const classes = `${styles.navItem} ${disabledClass} ${styles[this.props.className]}`;
    return (
      <Link className={classes} to={this.props.to} onClick={this.handleClick}>
        {this.props.text}
      </Link>
    );
  }
}

NavItem.propTypes = {
  className: PropTypes.string,
  isExternal: PropTypes.bool,
  notClickable: PropTypes.bool,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  className: null,
  isExternal: false,
  notClickable: false
};

// TODO: Remove all references to notClickable and disabledClass (including .css) when
// every route has been created.

export default NavItem;
