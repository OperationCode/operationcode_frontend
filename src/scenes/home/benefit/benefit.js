import React from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import NodeLogo from '../../../images/nodejs.png';
import OCLogo from '../../../images/logos/small-logo.png';
import styles from './benefit.css';

const Benefit = () => (
  <div>
    <Section title="You're Invited!" theme="white">
      <br />
      <img src={OCLogo} alt="Operation Code" />
      <br />
      <p>
        The Operation Code Board of Directors, all-volunteer staff, and 3,000+ members cordially
        invite you to the <b>Operation Code Veteran’s Day Benefit Dinner & Silent Auction</b> on
        November 11, 2017 in the Governor Ballroom at Portland’s historic Sentinel Hotel.
      </p>
      <div className={styles.center}>
        <h5>Nov 11, 2017 at 5:30 PM</h5>
        <h5>Governor&#39;s Ballroom, Sentinel Hotel</h5>
        <h5>Portland, Oregon</h5>
        <p>
          <b>Hors d’oeuvres and Silent Auction</b> at 5:30 PM
        </p>
        <p>
          <b>Dinner</b> at 6:30 PM
        </p>
        <iframe
          title="Sentinel Hotel"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11181.901436230051!2d-122.6826821!3d45.5206389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x776c285f8c70615a!2sSentinel!5e0!3m2!1sen!2sus!4v1501714755964"
          width="600"
          height="450"
          allowFullScreen
        />
        <br />
        <hr />
        <br />
        <h5>Buy Tickets Now!</h5>
        <p>Individual tickets start at $85.</p>
        <p className={styles.cta}>
          <LinkButton
            text="Purchase Tickets"
            theme="red-large"
            link="https://operationcode.ejoinme.org/MyEvents/DeploytheFutureGala2017/VeteransDayBenefitDinnerSilentAuctionTicketTableRegistration/tabid/892109/Default.aspx"
            isExternal
          />
        </p>
      </div>
    </Section>

    <Section title="Sponsors" theme="white">
      <div className={styles.center}>
        <p>
          This year’s major sponsors include NodeJS Foundation, Sabio, and Beneficial State Bank.
        </p>
        <p>
          <a href="https://nodejs.org/en/foundation/" target="_blank" rel="noopener noreferrer">
            <img src={NodeLogo} alt="NodeJS Foundation Logo" width="300px" />
          </a>
        </p>
        <p>
          Sponsorships still available! More info{' '}
          <a
            href="https://operationcode.ejoinme.org/MyEvents/DeploytheFutureGala2017/VeteransDayBenefitDinnerSilentAuctionTicketTableRegistration/tabid/892109/Default.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
        <p>
          Read the full press release{' '}
          <a
            href="https://s3-us-west-2.amazonaws.com/operationcode/veterans-day-benefit-dinner-auction+.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
      </div>
    </Section>
  </div>
);

export default Benefit;
