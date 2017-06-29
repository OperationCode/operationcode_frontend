import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import emailIcon from 'images/icons/Email-Icon.svg';
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
              <a href="staff@operationcode.org">Staff@operationcode.org</a>  
            </div>
            <div className={styles.right}>
            </div>   
          </div>
        </Section>
      </div>
    );
  }
}

export default Contact;
