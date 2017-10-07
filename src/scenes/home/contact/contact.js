import React from 'react';
import { Link } from 'react-router-dom';
import Section from 'shared/components/section/section';
import IconCard from 'shared/components/iconCard/iconCard';
import styles from './contact.css';

const Contact = () => (
  <div>
    <Section title="Contact Us">
      <p className={styles.centerText}>
        We are a decentralized community of hard-working volunteers, and we love hearing feedback, comments, and suggestions!
        <br />
        <br />
        The best way to reach our staff and our members is by <Link to="join">joining Operation Code</Link> to receive an invite to our team, including our Slack chat and <a href="https://community.operationcode.org/" target="_blank" rel="noopener noreferrer">forums</a>. You can also reach us via email, physical mail, or via <a href="//twitter.com/operation_code" target="_blank" rel="noopener noreferrer">Twitter.</a>
      </p>
    </Section>
    <Section theme="white" headingLines={false}>
      <div className={styles.flexContainer}>
        {/* Columns */}
        <IconCard
          title="Email" fontAwesomeIcon="FaEnvelope" iconSize={175} url="mailto:staff@operationcode.org"
          subText="staff@operationcode.org"
        />
        <IconCard
          title="Slack Team" fontAwesomeIcon="FaSlack" iconSize={175} url="https://operation-code.slack.com"
          subText="https://operation-code.slack.com"
        />
        <IconCard
          title="Mailing Address" fontAwesomeIcon="FaHome" iconSize={175}
          subText="Operation Code<br/>
            1220 SW Morrison St<br/>
            Suite 437<br/>
            Portland, OR 97205"
          usingHtml
        />
      </div>
    </Section>
  </div>
);

export default Contact;
