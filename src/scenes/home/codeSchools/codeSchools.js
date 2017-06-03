import React, { Component } from 'react';
import Section from 'shared/components/section/section';
// import SchoolCard from 'shared/components/schoolCard/schoolCard';
import styles from './codeSchools.css';

export default class codeSchools extends Component {

  render() {
    return (
      <Section title="Code Schools" theme="white">
        <h2 className={styles.headLine}> Code Schools prepare aspiring programmers for new careers in software development.</h2>

        <p className={styles.paragraph}> Code schools are accelerated learning programs that will prepare you for a career in software development. <br /> Each school listed below ranges in length, vary in tuition costs, and in programming languages. Desirable from an employer&#39;s standpoint, code schools are founded by software developers who saw a need for more programmers and aspired to teach the next generation.
        </p>

        <p className={styles.paragraph}>
          We encourage you to check out the schools below, do your research, and ask fellow software developers in <a href="https://operation-code.slack.com."> Slack</a>
        </p>
      </Section>
    );
  }
}
