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
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const classes = `${styles.navItem} ${styles[this.props.className]}`;
    if (this.props.isExternal) {
      return (
        <a className={classes} href={this.props.to} target="_blank" rel="noopener noreferrer">
          {this.props.text}
        </a>
      );
    }

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
  onClick: PropTypes.func,
  to: PropTypes.string,
  text: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  className: null,
  isExternal: false,
  onClick: null,
  to: ''
};

export default NavItem;
