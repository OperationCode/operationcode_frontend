import React, { Component } from 'react';
import styles from './nav.css';
import classNames from 'classnames';

class Nav extends Component {
constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      scrollPosition: window.scrollTop,
      windowPosition: window.pageYOffset,
      mobileNavVisible: false,
      navClasses: classNames({'nav_container':true, 'nav_pinch':false})
    };
  }
  render() {
    return (
      <div className={`${this.props.className} ${styles.nav}`} >
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

}

export default Nav;
