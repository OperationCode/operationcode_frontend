import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import Drawer from 'shared/components/drawer/drawer';
import NavItem from 'shared/components/nav/navItem/navItem';
import logo from 'images/logos/small-white-logo.png';
import styles from './sideNav.css';

class SideNav extends Component {

  propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func.isRequired
  };

  defaultProps = {
    isVisible: false,
    onClose: () => {},
  };

  state = {
    signedIn: false,
    mentor: false
  }

  componentWillMount() {
    const cookies = new Cookies();
    this.setState({ mentor: !!cookies.get('mentor'), signedIn: !!cookies.get('token') });
  }


  handleCloseClick = (e) => {
    e.preventDefault();
    this.props.onClose();
  };

  renderNavItems = () => {
    if (this.state.signedIn) {
      if (this.state.mentor) {
        return (
          <span>
            <NavItem
              className="menuItem"
              to="mentors"
              text="Mentors"
              onClick={this.handleCloseClick}
            />
            <NavItem
              className="menuItem"
              to="requests"
              text="Requests"
              onClick={this.handleCloseClick}
            />
            <NavItem
              className="menuItem"
              to="squads"
              text="Squads"
              onClick={this.handleCloseClick}
            />
            <NavItem
              className="menuItem"
              to="logout"
              text="Logout"
              onClick={this.handleCloseClick}
            />
          </span>
        );
      }
      return (
        <span>
          <NavItem
            className="menuItem"
            to="mentors"
            text="Mentors"
            onClick={this.handleCloseClick}
          />
          <NavItem
            className="menuItem"
            to="squads"
            text="Squads"
            onClick={this.handleCloseClick}
          />
          <NavItem
            className="menuItem"
            to="logout"
            text="Logout"
            onClick={this.handleCloseClick}
          />
        </span>
      );
    }
    return (
      <span>
        <NavItem
          className="menuItem"
          to="join" text="Join"
          onClick={this.handleCloseClick}
        />
        <NavItem
          className="menuItem"
          to="login" text="Login"
          onClick={this.handleCloseClick}
        />
      </span>
    );
  }


  render() {
    const { isVisible } = this.props;
    return (
      <Drawer isVisible={isVisible}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              <a className={styles.close} href="/" onClick={this.handleCloseClick}>&#10006;</a>
            </div>
            <a className={styles.logoWrapper} href="/">
              <img className={styles.logo} src={logo} alt="Operation Code logo" />
            </a>
          </div>
          <div className={styles.list}>
            <NavItem
              className="menuItem"
              to="https://donorbox.org/operationcode"
              text="Donate"
              isExternal
              onClick={this.handleCloseClick}
            />
            {this.renderNavItems()}
            <NavItem
              className="menuItem"
              to="about"
              text="About" onClick={this.handleCloseClick}
              notClickable
            />
            <NavItem
              className="menuItem"
              to="programs"
              text="Programs" onClick={this.handleCloseClick}
              notClickable
            />
            <NavItem
              className="menuItem"
              to="involved"
              text="Get Involved" onClick={this.handleCloseClick}
              notClickable
            />
            <NavItem
              className="menuItem"
              to="blog"
              text="Blog"
              onClick={this.handleCloseClick}
              notClickable
            />
          </div>
        </div>
      </Drawer>
    );
  }
}

export default SideNav;
