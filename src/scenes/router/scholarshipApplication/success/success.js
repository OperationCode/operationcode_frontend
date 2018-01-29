import React from 'react';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import FormButton from 'shared/components/form/formButton/formButton';
import styles from './success.css';

const Success = () => (
  <Section title="Success!" theme="white">
    <span className={styles.successText}>We have recieved your application.</span>
    <Link to="/scholarships">
      <FormButton text="Return to scholarships" />
    </Link>
  </Section>
);

export default Success;
