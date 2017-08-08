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
    <span className={styles.parent}>
      <NavItem text={props.text} />
      <div className={styles.content}>
        {props.children.map(v => (
          <span key={v.props.text} className={classes}>
            {v}
          </span>
        ))}
      </div>
    </span>
  );
}

NavDropdown.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired, // eslint-disable-line react/forbid-prop-types
  text: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(NavDropdown);
