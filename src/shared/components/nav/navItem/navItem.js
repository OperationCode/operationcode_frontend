import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.css';

class NavItem extends PureComponent {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.isExternal) {
      window.location(this.props.to);
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
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
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  className: null,
  isExternal: false,
  notClickable: false,
  onClick: null
};

// TODO: When all routes complete, remove all references to notClickable and disabledClass (js/css)
// NOTE: For the usage of disabledClass within the classes const, ask jjhampton if there are issues

export default NavItem;
