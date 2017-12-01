import React from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './join.css';

const Join = (props) => {
  const { ...otherProps } = props;
  return (
    <Section
      title="Join Today!" {...otherProps}
      className={styles.joinSection} theme="gray" headingLines={false}
    >
      <div className={styles.join} >
        <p>
          Operation Code is leading the way to expand opportunities
          for military veterans and their families to learn new skills,
          and build a career in the fast-growing technology sector.
        </p>
        <p>Join our community for free and jumpstart your skills today!</p>
        <LinkButton text="Join" link="/join" theme="red" />
      </div>
    </Section>
  );
};

Join.propTypes = {};

export default Join;
