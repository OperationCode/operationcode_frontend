import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaSlack, FaHome } from 'react-icons/lib/fa';
import Section from 'shared/components/section/section';
import styles from './contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <Section title="Contact Us" >
          <p2>
            We are a decentralized community of hard-working volunteers, and we love hearing feedback, comments, and suggestions. Feel free to send us an e-mail, or even mail a letter.
            <br />
            <br />
            The best way to reach our staff and our members is by <Link to="join">joining Operation Code</Link> to receive an invite to our Slack team..
          </p2>
        </Section>

        <Section theme="white" headingLines={false} >
          <div className={styles.flexContainer}>
            <div className={styles.columns}>
              <h3>Email</h3>
              <a href="mailto:staff@operationcode.org">
                <FaEnvelope className={styles.mailIcon} size={200} />
              </a>
              <p>
                <a href="mailto:staff@operationcode.org">staff@operationcode.org</a>
              </p>
            </div>

            <div className={styles.columns}>
              <h3>Slack Team</h3>
              <a href="https://operation-code.slack.com">
                <FaSlack className={styles.slackIcon} size={170} />
              </a>
              <p>
                <a href="https://operation-code.slack.com">https://operation-code.slack.com</a>
              </p>
            </div>

            <div className={styles.columns}>
              <h3>Mailing Address</h3>
              <FaHome size={217} />
              <p className={styles.address}>
                Operation Code
                <br />
                1220 SW 11th Avenue
                <br />
                Suite 437
                <br />
                Portland, OR 97205
              </p>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Contact;
