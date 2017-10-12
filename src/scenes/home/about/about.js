import React from 'react';
import { Link } from 'react-router-dom';
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

const About = () => (
  <div>
    <Section title="About" theme="white">
      <p>
        We at Operation Code strive to provide an efficient way into a tech career for veterans and their families. We work directly with Senators, Congressmen, and Congresswomen to allow veterans total control of their future by permitting the use of the GI Bill on coding bootcamps. You can read about our organization&apos;s history <Link to="/history">here</Link>.
      </p>
      <p>
        Aside from our work on the Hill, we offer many services to the military community and are continuing to expand our offerings as often as possible. First and foremost, <Link to="/team">our staff</Link> works tirelessly to provide mentorship for veterans interested in learning about various tech careers. Dozens of software engineers, product managers, system architects, security engineers, and various other IT professionals act as 1-on-1  mentors to all of our members. We also have a hardware loan program to help veterans in need of a laptop!
      </p>
      <p>
        As a non-profit organization, we rely heavily on your support. If you are interested in helping us financially, please <a href="https://donorbox.org/operationcode" target="_blank" rel="noopener noreferrer">donate here</a> or <a href="https://smile.amazon.com/ch/47-4247572" target="_blank" rel="noopener noreferrer">set your Amazon Smile organization to &quot;Operation Code&quot;</a>. We also have our first Gala planned for Fall 2017 in Portland Oregon! Register to attend <Link to="/gala">here</Link>. If you have questions about our organization, platforms, or services, please reference our <Link to="/faq">FAQ page</Link>. Otherwise, do not hesitate to <Link to="/contact">reach out to our staff</Link>.
      </p>
    </Section>

    <Section title="Mission">
      <p className={styles.sectionParagraph}>
        Operation Code is leading the way to expand opportunities for military veterans and their families. We aim to help veterans learn new skills and build their careers in the fast-growing technology sector. Our team’s mission - led by veterans and other dedicated, passionate volunteers - is to help open doors for our diverse member base through unique program offerings, such as our Software Mentor Program, conference scholarships, and employment services. All of this is made possible by individual donations and corporate partnerships.
      </p>
    </Section>

    <Section title="Who We Serve" theme="white">
      <p className={styles.sectionParagraph}>
        Past and present Army, Navy, Marines, Air Force, and Coast Guard service members, veterans, military spouses, and family members are welcome to apply to any of our programs. Through our online community, we work with 2000+ members around the world.
      </p>
      <br />
      <div className={styles.serviceSealWrapper}>
        <img className={styles.serviceSeal} src={armySeal} alt="Army Seal" />
        <img className={styles.serviceSeal} src={navySeal} alt="Navy Seal" />
        <img className={styles.serviceSeal} src={marineSeal} alt="Marine Seal" />
        <img className={styles.serviceSeal} src={marineReserveSeal} alt="Marine Reserve Seal" />
        <img className={styles.serviceSeal} src={coastGuardSeal} alt="Coast Guard Seal" />
        <img className={styles.serviceSeal} src={airForceSeal} alt="Air Force Seal" />
        <img className={styles.serviceSeal} src={airForceReserveSeal} alt="Air Force Reserve Seal" />
        <img className={styles.serviceSeal} src={armyReserveSeal} alt="Army Reserve Seal" />
        <img className={styles.serviceSeal} src={navyReserveSeal} alt="Navy Reserve Seal" />
      </div>
    </Section>

    <Section title="Core Values">
      <div className={styles.coreValues}>
        <ValueCard
          name="Integrity"
          description="We hold ourselves accountable for obtaining results that fulfill our Mission and work towards our Vision. As leaders, we are responsible for what we do, or fail to do. We act consistently with Operation Code's mission, being honest in what we do and say, and accept responsibility for our collective and individual actions."
        />
        <ValueCard
          name="Transparency"
          description="By being transparent in everything Operation Code does, from our open source code base to our financial operations, our community can trust that we will do our best with the resources we're given."
        />
        <ValueCard
          name="Agility"
          description="We run fast and we run lean. When our operating environment changes, and new challenges emerge, we're ready to respond. We communicate as early and as often as possible, and default to overcommunication in all of our interactions. We always look for a better, more effective, and more efficient way to run our operations."
        />
        <ValueCard
          name="Curiosity"
          description="Innovation is central to our mindset. We maintain an attitude of continuous improvement, and we constantly look for new and better ways to serve our community - we owe them nothing less."
        />
        <ValueCard
          name="Responsibility"
          description="We exist to meet the needs of the military community. We will humbly remember that their service was of the highest order and that Operation Code works for them. When it comes to the welfare and well-being of our community, the buck stops here."
        />
        <ValueCard
          name="Clarity"
          description="In the words of the US Army Signal Corps, we get the message through. We ensure that we are clear and concise in how we communicate, in support of our operations. We are considerate of the sender and the receiver, and communicate in the manner that best suits the needs of the mission and the vision."
        />
        <ValueCard
          name="Community"
          description="We look out for the people to our left and right, and always keep a hand free to help. We listen to our community and our people to ensure we are working towards the mission and the vision."
        />
      </div>
    </Section>
  </div>
);

export default About;
