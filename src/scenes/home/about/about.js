import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import armySeal from 'images/serviceSeals/Army.png';
import navySeal from 'images/serviceSeals/Navy.png';
import marineSeal from 'images/serviceSeals/USMC.png';
import marineReserveSeal from 'images/serviceSeals/USMCReserve.png';
import coastGuardSeal from 'images/serviceSeals/USCG.png';
import airForceSeal from 'images/serviceSeals/AirForce.png';
import airForceReserveSeal from 'images/serviceSeals/AirForceReserve.png';
import armyReserveSeal from 'images/serviceSeals/ArmyReserve.png';
import navyReserveSeal from 'images/serviceSeals/NavyReserve.png';
import styles from './about.css';

class About extends Component {
  render() {
    return (
      <div>
        <Section title="Mission" theme="white">
          <p>
            Operation code is leading the way to expand opportunities for military veterans and their families to learn new skills and build a career in the fast-growing technology sector. Our team’s mission, led by veterans and other dedicated volunteers who are passionate about technology, is to hep open doors for our diverse membership through unique program offerings, such as our Software Mentor Program, Conference Scholarships, and Employment Services - all made possible by individual donations and corporate partnerships.
          </p>
        </Section>

        <Section title="Who We Serve">
          <p>
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
      </div>
    );
  }
}

export default About;
