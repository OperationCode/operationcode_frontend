import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import NavItem from '../navItem/navItem';
import styles from './navDropdown.css';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const classes = classNames({
      [`${styles.child}`]: true,
      [`${styles.opaque}`]: !(this.props.location.pathname === '/')
    });

    return (
      <span className={styles.parent}>
        <NavItem text={this.props.text} onClick={this.handleToggle} />
        {this.state.open && <div className={styles.children}>
          {this.props.children.map(v => (
            <span className={classes}>
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
  text: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default withRouter(NavDropdown);
