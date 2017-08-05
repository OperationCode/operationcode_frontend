import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from '../navItem/navItem';
import styles from './navDropdown.css';

class NavDropdown extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <span className={styles.parent}>
        <NavItem text={this.props.text} onClick={this.handleToggle} />
        {this.state.open && <div className={styles.children}>
          {this.props.children.map(v => (
            <span className={styles.child}>
              {v}
            </span>
          ))}
        </div>}
      </span>
    );
  }
}

NavDropdown.propTypes = {
  children: PropTypes.instanceOf(NavItem).isRequired,
  text: PropTypes.string.isRequired
};

export default NavDropdown;
