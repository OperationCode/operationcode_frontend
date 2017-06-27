import React, { Component } from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import Question from './question/question';
import Data from './questions.json';
import styles from './faq.css';

class FAQ extends Component {
  render() {
    const generalQuestions = Data.general
      .map(question =>
        (
          <Question
            q={question.question}
            a={question.answer}
          />
        )
    );
    const donationQuestions = Data.donation
      .map(question =>
        (
          <Question
            q={question.question}
            a={question.answer}
          />
        )
    );
    const volunteerQuestions = Data.volunteer
      .map(question =>
        (
          <Question
            q={question.question}
            a={question.answer}
          />
        )
    );

    return (
      <div>
        <Section title="Frequently Asked Questions" theme="white">
          <span className={styles.headline}>General Questions</span>
          <div className={styles.container}>
            <div className={styles.accordion}>
              {generalQuestions}
            </div>
          </div>
          <span className={styles.headline}>Donation Questions</span>
          <div className={styles.container}>
            <div className={styles.accordion}>
              {donationQuestions}
            </div>
          </div>
          <span className={styles.headline}>Volunteer Questions</span>
          <div className={styles.container}>
            <div className={styles.accordion}>
              {volunteerQuestions}
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default FAQ;
