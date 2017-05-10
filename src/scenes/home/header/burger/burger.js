import React from 'react';
import PropTypes from 'prop-types';
import burger from 'images/icons/menu.svg';
import styles from './burger.css';

const Burger = (props) => {
  const { onClick } = props;

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div className={styles.burger}>
      <a className="burger" href="/" onClick={handleClick}><img src={burger} alt="" /></a>
    </div>
  );
};

Burger.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Burger;
