import React from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import OutboundLink from 'shared/components/outboundLink/outboundLink';
import partners from './partnerRoster';
import styles from './partners.css';

const Partners = () => (
  <Section title="Partners" theme="gray">
    <div className={styles.partners}>
      <p>
        Operation Code and our all-volunteer team offers our programs and
        services through the generous support of our partners. Their support,
        made via either financial contributions or in-kind donations,
        demonstrate their commitment to veterans, servicemembers, and military
        spouses. We are deeply grateful to the leadership of the organizations
        that are supporting our mission.
      </p>
    </div>

    <div className={styles.partnerLogos}>
      {partners.map(({ name, order, link, imgSource }) => (
        <div key={order}>
          <OutboundLink href={link} analyticsEventLabel={`[Partner] ${name}`}>
            <img src={imgSource} alt={name} />
          </OutboundLink>
        </div>
      ))}
    </div>

    <div className={styles.partners}>
      <p className={styles.contactUs}>
        We are always looking for organizations who are interested in working
        with us!
      </p>
      <LinkButton
        text="Contact Us"
        link="mailto:partnerships@operationcode.org"
        isExternal
      />
    </div>
  </Section>
);

export default Partners;
