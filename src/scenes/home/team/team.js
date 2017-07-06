import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import TeamCard from 'shared/components/teamCard/teamCard';
import StaffCard from 'shared/components/staffCard/staffCard';
import armySeal from 'images/serviceSeals/Army.png';
import navySeal from 'images/serviceSeals/Navy.png';
import marineSeal from 'images/serviceSeals/USMC.png';
import marineReserveSeal from 'images/serviceSeals/USMCReserve.png';
import coastGuardSeal from 'images/serviceSeals/USCG.png';
import airForceSeal from 'images/serviceSeals/AirForce.png';
import airForceReserveSeal from 'images/serviceSeals/AirForceReserve.png';
import armyReserveSeal from 'images/serviceSeals/ArmyReserve.png';
import navyReserveSeal from 'images/serviceSeals/NavyReserve.png';
import styles from './team.css';
// import Data from './team.json';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: []
    };
  }

  componentWillMount() {
    return fetch('https://api.operationcode.org/api/v1/team_members.json').then(response =>
      response.json().then((data) => {
        this.setState({ members: data });
      })
    );
  }

  render() {
    const team = this.state.members.map(member =>
      (
        <TeamCard
          key={`${Math.random()} + ${member.name}`}
          name={member.name}
          role={member.role}
        />
      )
    );
    const founder = {
      name: 'David Molina',
      role: 'Founder / Executive Director',
      src: 'https://pbs.twimg.com/profile_images/875514479202639873/vFr09yW4_400x400.jpg',
      alt: 'David Molina',
      twitter: '@davidcmolina',
      email: 'david@operationcode.org'
    };
    const coo = {
      name: 'Conrad Holloman',
      role: 'Chief of Staff / COO',
      src: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAP6AAAAJDk2MTJkMDc3LTdiZDYtNGNkZi1hOTgxLWE3YmI0OWFjYzQ4Nw.jpg',
      alt: 'Conrad Holloman',
      twitter: '@hollomancer',
      email: 'conrad@operationcode.org'
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.titleQuote}>
          <div className={styles.line} />
          <span className={styles.quote}>
            &quot;TO CARE FOR HIM WHO SHALL HAVE BORNE THE BATTLE, AND FOR HIS WIDOW, AND HIS ORPHAN&quot;
          </span>
          <div className={styles.line} />
        </div>
        <Section title="Mission" theme="white">
          <p className={styles.paragraph}>Operation code is leading the way to expand opportunities for military veterans and their families to learn new skills and build a career in the fast-growing technology sector. Our team’s mission, led by veterans and other dedicated volunteers who are passionate about technology, is to hep open doors for our diverse membership through unique program offerings, such as our Software Mentor Program, Conference Scholarships, and Employment Services - all made possible by individual donations and corporate partnerships.
          </p>

          <h2>Who We Serve</h2>
          <p className={styles.paragraph}>
         Past and present Army, Navy, Marines, Air Force, and Coast Guard service members, veterans, military spouses, and family members are welcome to apply to any of our programs. Through our online community, we work with 2000+ members around the world.</p>
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
        <Section title="Our Team" theme="white">
          <p className={styles.paragraph}>
            Our all volunteer staff are dedicated individuals who come from a wide variety of backgrounds, including U.S Military Veterans, civilians, those with tech backgrounds, and those who have skills outside of web development.
          </p>
          <div className={styles.team}>
            { team }
          </div>
        </Section>
        <Section title="Our Board" theme="gray">
          <p className={styles.paragraph}>
            Our fearless volunteer leaders. No salaries here.
          </p>
          <div className={styles.board}>
            <StaffCard name={founder.name} role={founder.role} src={founder.src} twitter={founder.twitter} email={founder.email} alt={founder.alt} />
            <StaffCard name={coo.name} role={coo.role} src={coo.src} twitter={coo.twitter} email={coo.email} alt={coo.alt} />
          </div>
        </Section>
      </div>
    );
  }
}

export default Team;
