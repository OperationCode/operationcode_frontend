import React from 'react';
import Section from 'shared/components/section/section';
import LinkButton from 'shared/components/linkButton/linkButton';
import SabioLogo from '../../../images/codeSchoolLogos/sabio.png';
import CodeFellowsLogo from '../../../images/codeSchoolLogos/codefellows_small.png';
import NodejsLogo from '../../../images/NodeSummitSF_ColorLogoWeb.jpg';
import srvdLogo from '../../../images/srvd.png';
import ebayLogo from '../../../images/320px-EBay_logo.png';
import secureSetLogo from '../../../images/SecureSet.logoUSE.jpg';
import PVAlogo from '../../../images/pvaoregon.jpg';
import PDXlogo from '../../../images/pdxcglogo.svg';
import launchCodeLogo from '../../../images/launchcode.png';
import topCoderLogo from '../../../images/topcoder.png';
import alchemyLogo from '../../../images/alchemyLogo.png';
import gitkrackenLogo from '../../../images/gitkraken-logo-dark-hz.png';
import styles from './benefit.css';

const Benefit = () => (
  <div>
    <Section title="Benefit Dinner & Auction" theme="white" headingLines={false}>
      <br />
      <h3>
        Open to the Public
      </h3>
      <p className={styles.cta}>
        <LinkButton
          role="button"
          text="Donate"
          theme="blue-large"
          link="https://opencollective.com/operationcode#support"
          isExternal
        />
        &#032;
        <LinkButton
          role="button"
          text="Purchase Tickets"
          theme="red-large"
          link="https://buytickets.at/opcode/122463"
          isExternal
        />
        <br />
        <LinkButton
          role="button"
          text="Download/Print Flyer"
          theme="blue"
          link="https://s3-us-west-2.amazonaws.com/operationcode/benefitdinner_auction_operationcode.pdf"
          isExternal
        />
        <LinkButton
          role="button"
          text="View Auction Items"
          theme="blue"
          link="https://s3-us-west-2.amazonaws.com/operationcode/finalpackages_benefit_dinner_auction_operationcode.pdf"
          isExternal
        />
      </p>
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
      <p className={styles.cta}>To learn more about sponsorship, {' '}
        <a
          href="https://operationcode.ejoinme.org/MyEvents/DeploytheFutureGala2017/VeteransDayBenefitDinnerSilentAuctionTicketTableRegistration/tabid/892109/Default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>.
        <br />
          Read the full press release{' '}
        <a
          href="https://s3-us-west-2.amazonaws.com/operationcode/veterans-day-benefit-dinner-auction+.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
        here
        </a>.
      </p>
    </Section>
    <Section title="You're Invited" theme="white">
      <div className={styles.cta}>
        <h6>Who:</h6>
        <p>
        250+ guests joining forces to help America’s finest and their families get into tech
        </p>
        <h6>What:</h6>
        <p>
          Hosted bar, wine, hors d’oeuvres, auction, dinner, and program
        </p>
        <h6>When:</h6>
        <p>
        Friday, November 10, 2017<br />
        5:30 PM Hosted Bar, Hors d’oeuvres, Silent Auction<br />
        7:00 PM Dinner, Program and Live Auction<br />
        </p>
        <h6>Where:</h6>
        <p>
        The Sentinel Hotel<br />
        Governor Ballroom<br />
        614 SW 11th Ave<br />
        Portland, OR 97205<br />
        </p>
        <h6>Why:</h6>
        <p>
        Fund Operation Code’s education programs and create a scholarship endowment
        </p>
        <h6>Dress: </h6>
        <p>
        Business Casual
        </p>
        <br />
        <h6>Event Co-Chairs:</h6>
        <p>
        Chris Dawson & David Molina
        </p>
        <h6>Auction Item Include:</h6>
        <p>
        Disney Parkhopper Passes, wine tastings, airline tickets, and more!
        </p>
      </div>
    </Section>
    <Section title="Menu" theme="white">
      <div className={styles.cta}>
        <p>
          <h6>Hors D’Oeuvres:</h6>
          <i>(Served with Silent Auction)</i> <br />
             Stuffed Baby Mushrooms <br />
          <i className={styles.desc}>with Bacon, Cream Cheese & Jalapeno</i><br />
             Grilled Prosciutto, Quince Paste, and Manchego Cheese on Baguette<br />
             Smoked Salmon Mousse Tartlets<br />
          <i className={styles.desc}>House Smoked Salmon with Cream Cheese, Chives & Lemon Zest</i><br />
             Pierre Robert Cheese & Cherry Conserve Crostini<br />
          <h6>Salad:</h6> Italian Kale and Romaine Salad<br />
          <i className={styles.desc}>with Radicchio, Fennel, Feta Cheese, Dried Cranberries and Candied Walnuts with a Green Goddess Dressing</i><br />
          <h6>Dinner:</h6> Mushroom Duxelle Stuffed Chicken<br />
          <i className={styles.desc}>Panko-Crusted Boneless Chicken Breast Stuffed with Mushroom Duxelle, Served with Creamy Farro Risotto & Rosemary Sage Cream Sauce</i><br />
          <b>Vegetarian Option:</b> Wild Mushrooms, Broccolini, Asparagus, and Fontina Cheese Served in an Acorn Squash with Butternut Squash Puree<br />
        </p>
        <p>
          Gluten Free Option Upon Request<br />
          Dinner Served with Artisan Rolls & Butter, House Brewed Coffee & Tea.
        </p>
        <h6>Dessert</h6>
        <p>
          To commemorate the 242nd Marine Corps Birthday, a birthday cake will be served for dessert.
        </p>
      </div>
    </Section>
    <Section title="This Year's Guests" theme="white">
      <div className={styles.cta}>
        <p>
          This year’s major sponsors include{' '}
          <a
            href="http://www.dshaw.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dan Shaw
          </a>,
           {' '}
          <a
            href="https://www.sabio.la/gi"
            target="_blank"
            rel="noopener noreferrer"
          >
           Sabio
          </a>, and {' '}
          <a
            href="https://www.beneficialstatebank.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           Beneficial State Bank
          </a>.<br />
          We want to thank friends of Operation Code for purchasing a ticket for veterans to attend, including: Jay Bloom, Billy Le, and Domenica Mendoza Bueno.
        </p>
        <div className={styles.logoBox}>
          <a
            href="https://www.sabio.la/gi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoTall} src={SabioLogo} alt="Sabio" />
          </a>
          <a
            href="https://www.nodesummit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoTall} src={NodejsLogo} alt="Node Summit" />
          </a>
          <a
            href="http://www.srvd.vet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoTall} src={srvdLogo} alt="SRVD" />
          </a>
          <a
            href="https://pdxcodeguild.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoTall} src={PDXlogo} alt="PXD Code Guild" />
          </a>
          <a
            href="http://www.alchemycodelab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoTall} src={alchemyLogo} alt="Alchemy Codelab" />
          </a>
          <a
            href="https://www.codefellows.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoLong} src={CodeFellowsLogo} alt="Code Fellows" />
          </a>
          <a
            href="https://secureset.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoLong} src={secureSetLogo} alt="Secure Set Cybersecurity Bootcamp" />
          </a>
          <a
            href="https://www.launchcode.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoLong} src={launchCodeLogo} alt="Launch Code" />
          </a>
          <a
            href="https://www.ebay.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoLong} src={ebayLogo} alt="eBay" />
          </a>
          <a
            href="https://www.topcoder.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoLong} src={topCoderLogo} alt="Top Coder" />
          </a>
          <a
            href="https://www.gitkraken.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logoLong} src={gitkrackenLogo} alt="GitKracken" />
          </a>
          <a
            href="http://www.oregonpva.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.pvaLogo} src={PVAlogo} alt="Oregon PVA" />
          </a>
        </div>
      </div>
    </Section>
    <Section title="Location" theme="white">
      <div className={styles.cta}>
        <h6>
        To reserve one of our blocked rooms at the historic Sentinel Hotel, please contact:
        </h6>
        <p>
        Shelley Phonharath<br />
        shelley.phonharath@provenancehotels.com<br />
        (503) 419-1620
        </p>
        <p>
        Thank you to all of our guests coming from across the United Stated to join us!
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
        <p>
          <b>For Additional Information</b><br />
          David Molina:<br />
          Co-Chair<br />
          david@operationcode.org<br />
          (971) 279-2586 (work)
        </p>
        <p>
          or
        </p>
        <p>
          Chris Dawson:<br />
          Co-Chair<br />
          xrdawson@gmail.com<br />
          (971) 533-8335
        </p>
        <br />
        <p className={styles.cta}>
          <LinkButton
            text="Donate"
            theme="blue-large"
            link="https://opencollective.com/operationcode#support"
            isExternal
          />
          &nbsp;
          <LinkButton
            text="Purchase Tickets"
            theme="red-large"
            link="https://buytickets.at/opcode/122463"
            isExternal
          />
        </p>
      </div>
    </Section>
  </div>
);

export default Benefit;
