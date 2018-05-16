import React from 'react';
import Section from 'shared/components/section/section';
import Question from './question/question';
import QuestionAnswerData from './questions';
import styles from './faq.css';

const FAQ = () => {
  const generalQuestions = QuestionAnswerData.general.map(qna => (
    <Question q={qna.question} a={qna.answer} key={qna.question} />
  ));
  const donationQuestions = QuestionAnswerData.donation.map(qna => (
    <Question q={qna.question} a={qna.answer} key={qna.question} />
  ));
  const volunteerQuestions = QuestionAnswerData.volunteer.map(qna => (
    <Question q={qna.question} a={qna.answer} key={qna.question} />
  ));

  return (
    <Section title="General Questions" theme="white">
      <Section theme="white" headingLines={false}>
        <div className={styles.container}>{generalQuestions}</div>
      </Section>
      <Section title="Donation Questions" theme="white">
        <br />
        <div className={styles.container}>{donationQuestions}</div>
      </Section>
      <Section title="Volunteer Questions" theme="white">
        <br />
        <div className={styles.container}>{volunteerQuestions}</div>
      </Section>
    </Section>
  );
};

export default FAQ;
