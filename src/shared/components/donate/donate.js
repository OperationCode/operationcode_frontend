import React from 'react';
// import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './donate.css';

const Donate = (props) => {
  const { ...otherProps } = props;
  return (
    <Section
      title="Donate" headingLines={false} {...otherProps}
      className={styles.donateSection} headingTheme="white"
    >
      <div className={styles.donate} >
        <p>
          Our mission and veteran programs are all maintained
          through the efforts of our all volunteer staff.
          Your thoughtful contribution to our fund allows us to expand
          our reach and help more veterans attend developer conferences.
        </p>
        <p>Thank you for helping us to get veterans coding!</p>
        <LinkButton text="Donate Now" link="https://donorbox.org/operationcode" />
      </div>
    </Section>
  );
};

Donate.propTypes = {};

export default Donate;
