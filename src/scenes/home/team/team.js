import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import TeamCard from 'shared/components/teamCard/teamCard';
import StaffCard from 'shared/components/staffCard/staffCard';
import styles from './team.css';

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
    const ceo = {
      name: 'David Molina',
      role: 'Founder / CEO',
      src: 'https://pbs.twimg.com/profile_images/875514479202639873/vFr09yW4_400x400.jpg',
      alt: 'David Molina',
      twitter: '@davidcmolina',
      email: 'david@operationcode.org'
    };
    const coo = {
      name: 'Conrad Hollomon',
      role: 'COO',
      src: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAP6AAAAJDk2MTJkMDc3LTdiZDYtNGNkZi1hOTgxLWE3YmI0OWFjYzQ4Nw.jpg',
      alt: 'Conrad Hollomon',
      twitter: '@hollomancer',
      email: 'conrad@operationcode.org'
    };
    const cto = {
      name: 'Rick Rein',
      role: 'CTO',
      src: 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/RickRein.jpg',
      alt: 'Rick Rein',
      twitter: '@rickrrrrrr',
      email: 'rick@operationcode.org'
    };

    const chair = {
      name: 'Dr. James Davis',
      role: 'Chair',
      src: 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/james.jpg',
      alt: 'Dr. James Davis'
    };
    const vicechair = {
      name: 'Dr. Tyrone Grandison',
      role: 'Vice Chair',
      src: 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/tyrone.png',
      alt: 'Dr. Tyrone Grandison'
    };
    const aimee = {
      name: 'Aimee Knight',
      role: 'Board Member',
      src: 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/aimee.jpg',
      alt: 'Aimee Knight'
    };
    const treasurer = {
      name: 'Elmer Thomas',
      role: 'Treasurer',
      src: 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/elmer.png',
      alt: 'Elmer Thomas'
    };
    const secretary = {
      name: 'Thomas Ciszec',
      role: 'Secretary',
      src: 'https://raw.githubusercontent.com/OperationCode/operationcode_frontend/master/src/images/thomas.jpg',
      alt: 'Thomas Ciszec'
    };

    return (
      <div>
        <QuoteBanner
          author="Abraham Lincoln"
          quote="To care for him who shall have borne the battle and for his widow, and his orphan."
        />

        <Section title="Our Staff" theme="white">
          <p>
            Our all volunteer staff are dedicated individuals who come from a wide variety of backgrounds, including members of both the civilian and military community.
          </p>
          <div className={styles.team}>
            { team }
          </div>
        </Section>

        <Section title="Our Team" theme="gray">
          <div className={styles.board}>
            <StaffCard name={ceo.name} role={ceo.role} src={ceo.src} twitter={ceo.twitter} email={ceo.email} alt={ceo.alt} />
            <StaffCard name={coo.name} role={coo.role} src={coo.src} twitter={coo.twitter} email={coo.email} alt={coo.alt} />
            <StaffCard name={cto.name} role={cto.role} src={cto.src} twitter={cto.twitter} email={cto.email} alt={cto.alt} />
          </div>
        </Section>

        <Section title="Our Board" theme="white">
          <div className={styles.board}>
            <StaffCard name={chair.name} role={chair.role} src={chair.src} alt={chair.alt} />
            <StaffCard name={vicechair.name} role={vicechair.role} src={vicechair.src} alt={vicechair.alt} />
            <StaffCard name={treasurer.name} role={treasurer.role} src={treasurer.src} alt={treasurer.alt} />
            <StaffCard name={secretary.name} role={secretary.role} src={secretary.src} alt={secretary.alt} />
            <StaffCard name={aimee.name} role={aimee.role} src={aimee.src} alt={aimee.alt} />
          </div>
        </Section>
      </div>
    );
  }
}

export default Team;
