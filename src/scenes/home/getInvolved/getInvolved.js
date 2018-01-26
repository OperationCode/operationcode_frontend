import React from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import WhyGive from './whyGive/whyGive';
import Volunteer from './volunteer/volunteer';
import SuccessStories from './successStories/successStories';
import styles from './getInvolved.css';

const getInvolved = () => (
  <div className={styles.page}>
    <div className={styles.pageHeading}>
      <h1>
        Get Involved
      </h1>
      <h5>
        Subheading Content -- please advise some copy for me
      </h5>
      <form>
        <LinkButton text="Donate" theme="red" link="https://opencollective.com/operationcode#support" isExternal />
        <LinkButton text="Volunteer" theme="blue" link="/signup" />
      </form>
    </div>
    <WhyGive />
    <Volunteer />
    <SuccessStories />
  </div>
);

export default getInvolved;
