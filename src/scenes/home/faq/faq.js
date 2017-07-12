import React, { Component } from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
import Question from './question/question';
import Data from './questions.json';

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
      <Section title="Frequently Asked Questions" theme="white" headingLines={false}>
        <Section theme="white" headingLines={false}>
          {generalQuestions}
          <LinkButton
            link="top"
            text="Scroll to Top"
            theme="blue"
            scrollLink
          />
        </Section>
        <Section title="Donation Questions" theme="white" headingLines={false}>
          {donationQuestions}
          <LinkButton
            link="top"
            text="Scroll to Top"
            theme="blue"
            scrollLink
          />
        </Section>
        <Section title="Volunteer Questions" theme="white" headingLines={false}>
          {volunteerQuestions}
        </Section>
      </Section>
    );
  }
}

export default FAQ;
