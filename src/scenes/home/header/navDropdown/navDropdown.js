import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import NavItem from '../navItem/navItem';
import styles from './navDropdown.css';

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktopScreenSize: true,
    };
    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  componentDidMount() {
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize() {
    this.setState({ isDekstopScreenSize: window.innerWidth > 779 });
  }

  // TODO: Utilize isDesktopScreenSize to render just the children so that the sideNav renders things properly without CSS Media Queries
  render() {
    return (
      <div className={styles.parent}>
        <NavItem text={`${this.props.text} ${''} ▾`} />
        <ul className={styles.content}>
          {this.props.children.map(v => (
            <li key={v.props.text} className={styles.child}>
              {v}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

NavDropdown.propTypes = {
  /* eslint-disable-rule react/forbid-prop-types */
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string.isRequired,
  /* eslint-disable-rule */
};

export default withRouter(NavDropdown);
