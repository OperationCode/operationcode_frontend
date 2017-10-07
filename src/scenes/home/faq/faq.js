import React from 'react';
import Section from 'shared/components/section/section';
import Question from './question/question';
import Data from './questions.json';
import styles from './faq.css';

const FAQ = () => {
  const generalQuestions = Data.general
    .map(question =>
      (
        <Question
          q={question.question}
          a={question.answer}
          key={Math.random + question.question}
        />
      ));
  const donationQuestions = Data.donation
    .map(question =>
      (
        <Question
          q={question.question}
          a={question.answer}
          key={Math.random + question.question}
        />
      ));
  const volunteerQuestions = Data.volunteer
    .map(question =>
      (
        <Question
          q={question.question}
          a={question.answer}
          key={Math.random + question.question}
        />
      ));

  return (
    <Section title="General Questions" theme="white">
      <Section theme="white" headingLines={false}>
        <div className={styles.container}>
          {generalQuestions}
        </div>
      </Section>
      <Section title="Donation Questions" theme="white">
        <br />
        <div className={styles.container}>
          {donationQuestions}
        </div>
      </Section>
      <Section title="Volunteer Questions" theme="white">
        <br />
        <div className={styles.container}>
          {volunteerQuestions}
        </div>
      </Section>
    </Section>
  );
};

export default FAQ;
