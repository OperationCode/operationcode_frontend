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
          As a 501(c)(3) veteran-led nonprofit organization,
          our programs and services are maintained
          through the efforts of our volunteer staff.
          Your financial support allows us to continue helping
          the military community learn software development,
          enter the tech industry, and code the future.
        </p>
        <p>Thank you for supporting our mission!</p>
        <LinkButton text="Donate Now" link="https://donorbox.org/operationcode" />
      </div>
    </Section>
  );
};

Donate.propTypes = {};

export default Donate;
