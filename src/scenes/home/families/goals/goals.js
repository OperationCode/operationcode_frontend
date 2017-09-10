import React, { Component } from 'react';
import Heading from 'shared/components/heading/heading';
import styles from './goals.css';

class Goals extends Component {
  render() {
    return (
      <div className={styles.goals}>
        <div className={styles.goalsHeading}>
          <Heading text="Our Goals" />
        </div>
        <div className={styles.goalsContent}>
          <p>When a loved one deploys, we understand the hardships that family members who are left behind can endure. There can be a lot of responsibilities to juggle. Operation Code works to ease the burden on military families by opening our programs and services up to military spouses, children and grandchildren.</p>
          <ul>
            <li>We strive to make software development more accessible not only to our veteran and military members, but also to their spouses and extended family.</li>
            <li>Our community works to increase the interaction and engagement between military families across all our social channels.</li>
            <li>Operation Code programs, scholarships and services are open to military families to help cultivate the learning process, and our employer services can work with family members to get them placed in software development jobs.</li>
            <li>In the future, Operation Code plans to do a curriculum and grow a community for military children who are interested in learning how to code.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Goals;
