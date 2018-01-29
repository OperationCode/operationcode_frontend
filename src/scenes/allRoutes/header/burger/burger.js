import React from 'react';
import PropTypes from 'prop-types';
import burger from 'images/icons/menu.svg';
import styles from './burger.css';

function Burger(props) {
  return (
    <div className={styles.burger}>
      <a className="burger" href="/" onClick={props.onClick}><img src={burger} alt="" /></a>
    </div>
  );
}

Burger.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Burger;
