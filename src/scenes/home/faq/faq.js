import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import Question from './question/question';
import styles from './faq.css';

class FAQ extends Component {
  render() {
    return (
      <div>
        <Section title="Frequently Asked Questions" theme="white">
          <p className={styles.paragraph}>
            If you have any additional questions, please feel free to e-mail contact@operationcode.org
          </p>
          <span className={styles.headline}>General Questions</span>
          <div className={styles.container}>
            <div className={styles.accordion}>
              Bacon ipsum dolor amet tenderloin alcatra pork belly rump spare ribs short loin brisket ribeye picanha. Biltong pancetta prosciutto short loin brisket jerky, jowl beef leberkas short ribs ham hock pig. Ribeye tongue tri-tip ground round cupim. Jowl shankle chuck rump turducken.
            </div>
          </div>
          <span className={styles.headline}>Donation Questions</span>
          <div className={styles.container}>
            <div className={styles.accordion}>
              Bacon ipsum dolor amet tenderloin alcatra pork belly rump spare ribs short loin brisket ribeye picanha. Biltong pancetta prosciutto short loin brisket jerky, jowl beef leberkas short ribs ham hock pig. Ribeye tongue tri-tip ground round cupim. Jowl shankle chuck rump turducken.
            </div>
          </div>
          <span className={styles.headline}>Volunteer Questions</span>
          <div className={styles.container}>
            <div className={styles.accordion}>
              Bacon ipsum dolor amet tenderloin alcatra pork belly rump spare ribs short loin brisket ribeye picanha. Biltong pancetta prosciutto short loin brisket jerky, jowl beef leberkas short ribs ham hock pig. Ribeye tongue tri-tip ground round cupim. Jowl shankle chuck rump turducken.
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default FAQ;
