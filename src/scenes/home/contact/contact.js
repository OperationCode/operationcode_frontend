import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './contact.css';


class Contact extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          Contact Us
        </h3>
        <p className={styles.paragraph}>
          We are a decentralized community of hard-working volunteers. We love feedback, comments, and suggestions. <br />Find us on Slack, send an e-mail, or even mail us a letter.
        </p>
        <br />
        <Section theme="gray">
          <div className={styles.section}>
            <h3 className={styles.headline}>
              Email Inquiries:
            </h3>
            <br />
            <span className={styles.paragraph}>
              <a href="mailto:staff@operationcode.org">Staff@operationcode.org</a>
            </span>
          </div>
          <hr className={styles.line} />
          <div className={styles.section}>
            <h3 className={styles.headline}>
              Slack:
            </h3>
            <br />
            <span className={styles.paragraph}>
              <a href="https://operation-code.slack.com">Slack Chat</a>
            </span>
          </div>
          <hr className={styles.line} />
          <div className={styles.section}>
            <h3 className={styles.headline}>
              Mailing Address:
            </h3>
            <p className={styles.paragraph}>
              Operation Code <br /> 1220 SW 11th Avenue <br /> Suite 437  <br /> Portland, OR 97205
            </p>
          </div>
        </Section>
      </div>
    );
  }
}

export default Contact;
