import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import NavItem from '../navItem/navItem';
import styles from './navDropdown.css';

function NavDropdown(props) {
  const classes = classNames({
    [`${styles.child}`]: true,
    [`${styles.opaque}`]: !(props.location.pathname === '/')
  });

  return (
    <div className={styles.parent}>
      <NavItem text={`${props.text} ${''} ▾`} />
      <ul className={styles.content}>
        {props.children.map(v => (
          <li key={v.props.text} className={classes}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

NavDropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired, // eslint-disable-line react/forbid-prop-types
  text: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(NavDropdown);
