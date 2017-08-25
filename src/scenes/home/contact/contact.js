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
          <p className={styles.centerText}>
            We are a decentralized community of hard-working volunteers, and we love hearing feedback, comments, and suggestions!
            <br />
            <br />
            The best way to reach our staff and our members is by <Link to="join">joining Operation Code</Link> to receive an invite to our Slack team. You can also reach us via email, physical mail, or via <a href="//twitter.com/operation_code" target="_blank" rel="noopener noreferrer">Twitter.</a>
          </p>
        </Section>

        <Section theme="white" headingLines={false} >
          <div className={styles.flexContainer}>
            {/* Columns */}
            <div className={styles.centerText}>
              <h3>Email</h3>
              <a href="mailto:staff@operationcode.org">
                <FaEnvelope className={styles.mailIcon} size={200} />
              </a>
              <p>
                <a href="mailto:staff@operationcode.org">staff@operationcode.org</a>
              </p>
            </div>

            <div className={styles.centerText}>
              <h3>Slack Team</h3>
              <a
                href="https://operation-code.slack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSlack className={styles.slackIcon} size={170} />
              </a>
              <p>
                <a
                  href="https://operation-code.slack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://operation-code.slack.com
                </a>
              </p>
            </div>

            <div className={styles.centerText}>
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
