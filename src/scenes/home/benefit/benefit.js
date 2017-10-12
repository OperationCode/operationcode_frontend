import React from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import NodeLogo from '../../../images/nodejs.png';
import OCLogo from '../../../images/logos/small-logo.png';
import styles from './benefit.css';

const Benefit = () => (
  <div>
    <Section title="Benefit Dinner & Silent Auction" theme="white">
      <br />
      <p className={styles.cta}>
        <LinkButton
          text="Donate"
          className={styles.blueLarge}
          link="https://opencollective.com/operationcode#support"
          isExternal
        />
        &nbsp;
        <LinkButton
          text="Purchase Tickets"
          theme="red-large"
          link="https://operationcode.ejoinme.org/MyEvents/DeploytheFutureGala2017/VeteransDayBenefitDinnerSilentAuctionTicketTableRegistration/tabid/892109/Default.aspx"
          isExternal
        />
      </p>
      <br />
      <img src={OCLogo} alt="Operation Code" />
      <br />
      <p>
       The 2017 Operation Code Benefit Dinner & Auction will celebrate the tens of hundreds of life-changing educational and mentorship opportunities provided throughout the country and across the globe since 2014 while aspiring to deliver more next year.
      </p>
      <p>
      Every day a new active military service member, citizen-soldier, veteran, spouse or military family member joins Operation Code for software mentorship, career guidance and assistance, for the lifelong friendships, tech conference and code school scholarships, and to be part of something bigger than themselves— an open source community comprised of passionate volunteer software developers and technology entrepreneurs all dedicated to helping the men and women who’ve served in uniform and their families get the technical skills necessary for the 21st century new skills economy. In too many cases, they face financial barriers and hardships to get started.
      </p>
      <p>
       At Operation Code, we believe every service member, citizen-soldier, veteran and family member deserves exceptional technology training and mentorship. We believe that all who’ve worn the uniform and their families should fill the nation’s technical talent shortage.
      </p>
      <p>
       That’s what drives each and every one of us: our global network of volunteer software developers, who donate tens of thousands of hours towards mentoring those who’ve served and their families, and our supporters who back us through employee-employer matching, in-kind contributions, and generous sponsorship.
      </p>
      <p>
       On Friday, November 10, 2017, we will come together at the Sentinel Hotel’s Governor Ballroom to pause, reflect, toast and celebrate how far we’ve come. We will honor those who’ve served in uniform and how much they’ve learned through the communities generosity. With your support, we will continue to fund our education programs and seed our first scholarship endowment so we can go further, faster tomorrow.
      </p>
    </Section>
    <Section title="You're Invited" theme="white">
      <div className={styles.center}>
        <p>
          <b>Who: </b>250+ guests joining forces to help America’s finest and their families get into tech
        </p>
        <p>
          <b>What: </b>Hosted bar, wine, hors d’oeuvres, auction, dinner, and program
        </p>
        <p>
          <b>When: </b>Friday, November 10, 2017<br />
          5:30 PM Hosted Bar, Hors d’oeuvres, Silent Auction<br />
          7:00 PM Dinner, Program and Live Auction<br />
        </p>
        <p>
          <b>Where: </b>The Sentinel Hotel<br />
          Governor Ballroom<br />
          614 SW 11th Ave<br />
          Portland, OR 97205<br />
        </p>
        <p>
          <b>Why: </b>Fund Operation Code’s education programs and create a scholarship endowment
        </p>
        <p>
          <b>Dress: </b>Business Casual
        </p>
        <br />
        <hr />
        <br />
        <p>
          <b>Event Chairs: </b>Chris Dawson & David Molina
        </p>
        <p>
          <b>For Additional Information</b><br />
          Please contact David Molina at:<br />
          david@operationcode.org<br />
          (971) 279-2586 (work)<br />
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
    <Section title="The Sentinel" theme="white">
      <div className={styles.center}>
        <iframe
          title="Sentinel Hotel"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11181.901436230051!2d-122.6826821!3d45.5206389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x776c285f8c70615a!2sSentinel!5e0!3m2!1sen!2sus!4v1501714755964"
          width="600"
          height="450"
          allowFullScreen
        />
        <p className={styles.cta}>
          <LinkButton
            text="Donate"
            className={styles.blueLarge}
            link="https://opencollective.com/operationcode#support"
            isExternal
          />
          &nbsp;
          <LinkButton
            text="Purchase Tickets"
            theme="red-large"
            link="https://operationcode.ejoinme.org/MyEvents/DeploytheFutureGala2017/VeteransDayBenefitDinnerSilentAuctionTicketTableRegistration/tabid/892109/Default.aspx"
            isExternal
          />
        </p>
      </div>
    </Section>
  </div>
);

export default Benefit;
