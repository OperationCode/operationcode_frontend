import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/lib/fa';
import Section from 'shared/components/section/section';
import styles from './success.css';

class Success extends Component {
  render() {
    return (
      <Section title="Success!">
        <span className={styles.successText}>Your Scholarship Application has been submitted.</span>
        <Link to="scholarships">
          <FaGraduationCap className={styles.successImage} size={150} />
        </Link>
      </Section>
    );
  }
}

export default Success;
