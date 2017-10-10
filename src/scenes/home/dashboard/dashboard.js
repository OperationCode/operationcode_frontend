import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import styles from './dashboard.css';

class Dashboard extends Component {
  state = {
    mentor: null
  }

  componentWillMount() {
    const cookies = new Cookies();
    this.setState({ mentor: cookies.get('mentor') });
  }

  renderLinks = () => {
    const { mentor } = this.state;
    return mentor === 'true'
      ? (
        <div>
          <h1 className={styles.link}>
            <Link to="/squads/new-squad">Create a Squad</Link>
          </h1>
          <h1 className={styles.link}>
            <Link to="/squads">View Squads</Link>
          </h1>
        </div>
      ) : (
        <div>
          <h1 className={styles.link}>
            <Link to="/mentor-request">Request Help</Link>
          </h1>
          <h1 className={styles.link}>
            <Link to="/squads">Join a Squad</Link>
          </h1>
        </div>
      );
  }
  render() {
    return (
      <Section title="What would you like to do?" theme="white">
        {this.renderLinks()}
      </Section>
    );
  }
}

export default Dashboard;
