import React, { Component } from 'react';
import armySeal from 'images/serviceSeals/Army.png';
import navySeal from 'images/serviceSeals/Navy.png';
import marineSeal from 'images/serviceSeals/USMC.png';
import marineReserveSeal from 'images/serviceSeals/USMCReserve.png';
import coastGuardSeal from 'images/serviceSeals/USCG.png';
import airForceSeal from 'images/serviceSeals/AirForce.png';
import airForceReserveSeal from 'images/serviceSeals/AirForceReserve.png';
import armyReserveSeal from 'images/serviceSeals/ArmyReserve.png';
import navyReserveSeal from 'images/serviceSeals/NavyReserve.png';
import Section from 'shared/components/section/section';
import ValueCard from './valueCard/valueCard';
import styles from './about.css';

class About extends Component {
  // TODO: Link /history, /faq, /contact, and /team somewhere on the page.

  render() {
    return (
      <div>
        <Section title="Mission" theme="white">
          <p className={styles.sectionParagraph}>
            Our mission is to help the military community learn software development, enter the tech industry, and code the future! Through teaching veterans, transitioning servicemembers, and their families to code with open source projects, we'll be able to help fill our economy's technical talent shortage with our nation's finest. We aim to help veterans learn new skills and build their careers in the fast-growing technology sector. Our team’s mission - led by veterans and other dedicated, passionate volunteers - is to help open doors for the diverse military community through our mentorship, career development, and scholarship programs. All of this is made possible by individual donations and corporate sponsorships.
          </p>
        </Section>

        <Section title="Who We Serve">
          <p className={styles.sectionParagraph}>
            Past and present Army, Navy, Marines, Air Force, and Coast Guard service members, veterans, military spouses, and family members are welcome to apply to any of our programs. Through our online community, we work with 2000+ members around the world.
          </p>
          <br />
          <div className={styles.serviceSealWrapper}>
            <img className={styles.serviceSeal} src={armySeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={navySeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={marineSeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={marineReserveSeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={coastGuardSeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={airForceSeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={airForceReserveSeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={armyReserveSeal} alt="Army Seal" />
            <img className={styles.serviceSeal} src={navyReserveSeal} alt="Army Seal" />
          </div>
        </Section>

        <Section title="Core Values" theme="white">
          <div className={styles.coreValues}>
            <ValueCard
              name="Integrity"
              description="We hold ourselves accountable for obtaining results that fulfill our Mission and work towards our Vision. As leaders, we are responsible for what we do, or fail to do. We act consistently with Operation Code's mission, being honest in what we do and say, and accept responsibility for our collective and individual actions."
            />
            <ValueCard
              name="Transparency"
              description="In the words of the US Army Signal Corps, we get the message through. We ensure that we are clear and concise in how we communicate, in support of our operations. By being transparent in everything Operation Code does, from our open source code base to our financial operations, our community can trust that we will do our best with the resources we're given. We are considerate of the sender and the receiver, and communicate in the manner that best suits the needs of the mission and the vision."
            />
            <ValueCard
              name="Agility"
              description="We run fast and we run lean. When our operating environment changes, and new challenges emerge, we're ready to respond. We communicate as early and as often as possible, and default to overcommunication in all of our interactions. We always look for a better, more effective, and more efficient way to run our operations. Innovation is central to our mindset. We maintain an attitude of continuous improvement, and we constantly look for new and better ways to serve our community - we owe them nothing less."
            />
            <ValueCard
              name="Responsibility"
              description="We look out for the people to our left and right, and always keep a hand free to help. We listen to our community and our people to ensure we are working towards the mission and the vision. We will humbly remember that their service was of the highest order and that Operation Code works for them. When it comes to the welfare and well-being of our community, the buck stops here."
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default About;
