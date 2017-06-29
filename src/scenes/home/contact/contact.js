import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import emailIcon from 'images/icons/Email-Icon.svg';
import locationIcon from 'images/icons/Location-Icon.svg';
import styles from './contact.css';


class Contact extends Component {
  render() {
    return (
      <div>
        <Section title="Contact Us" theme="white">
          <p className={styles.paragraph}>
            We keep our organization intentionally decentralized so every penny of our operating budget goes directly to our programming. If you do need to contact us directly, feel free to join our <a href="https://operation-code.slack.com">Slack</a> or use one of the methods below.
          </p>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <img src={emailIcon} alt="Email Icon" />
              <a href="staff@operationcode.org"><p className={styles.paragraph}>Staff@operationcode.org</p></a>
            </div>
            <div className={styles.right}>
              <img src={locationIcon} alt="Location Icon" />
              <p className={styles.paragraph}>
                Physical address <br /> Operation Code  <br />1220 SW 11th Avenue, Suite 437  <br /> Portland, OR 97205
              </p>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Contact;
