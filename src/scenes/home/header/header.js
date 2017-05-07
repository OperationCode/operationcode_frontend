import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.css';
import TopNav from './topNav/topNav';
import Logo from './logo/logo';
import Burger from './burger/burger';

class Header extends Component {

  render() {
    const classes = classNames({
      [`${styles.header}`]: true,
      [`${styles.transparent}`]: this.props.transparent
    });
    return (
      <div className={classes} >
        <Logo />
        <Burger />
        <TopNav />
      </div>
    );
  }
}

Header.propTypes = {
  transparent: PropTypes.bool
};

Header.defaultProps = {
  transparent: false
};

export default Header;
