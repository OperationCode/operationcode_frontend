import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import TeamCard from 'shared/components/teamCard/teamCard';
import BoardCard from 'shared/components/boardCard/boardCard';
import styles from './team.css';

class Team extends Component {
  state = {
    members: []
  };

  componentWillMount() {
    return fetch('https://api.operationcode.org/api/v1/team_members.json').then(response =>
      response.json().then((data) => {
        this.setState({ members: data });
      }));
  }

  render() {
    const team = this.state.members.map(member =>
      (
        <TeamCard
          key={`${Math.random()} + ${member.name}`}
          name={member.name}
          role={member.role}
        />
      ));
    const chair = {
      name: 'Dr. James Davis',
      role: 'Chair',
      src: './images/james.jpg',
      alt: 'Head shot of Dr. James Davis'
    };
    const vicechair = {
      name: 'Dr. Tyrone Grandison',
      role: 'Vice Chair',
      src: './images/tyrone.png',
      alt: 'Head shot of Dr. Tyrone Grandison'
    };
    const treasurer = {
      name: 'Elmer Thomas',
      role: 'Treasurer',
      src: './images/elmer.png',
      alt: 'Head shot of Elmer Thomas'
    };
    const secretary1 = {
      name: 'Thomas Ciszec',
      role: 'Secretary',
      src: './images/thomas.jpg',
      alt: 'Head shot of Thomas Ciszec'
    };
    const secretary2 = {
      name: 'Liza Rodewald',
      role: 'Secretary',
      src: './images/liza.jpg',
      alt: 'Head shot of Liza Rodewald'
    };
    const secretary3 = {
      name: 'Stacy Chin',
      role: 'Secretary',
      src: './images/stacy.jpg',
      alt: 'Head shot of Stacy Chin'
    };
    const secretary4 = {
      name: 'Conrad Hollomon',
      role: 'Secretary',
      src: './images/conrad.jpg',
      alt: 'Head shot of Conrad Hollomon'
    };
    return (
      <div>
        <QuoteBanner
          author="Abraham Lincoln"
          quote="To care for him who shall have borne the battle and for his widow, and his orphan."
        />

        <Section title="Our Team" theme="white">
          <p>
            Our all volunteer staff are dedicated individuals who come from a wide variety of backgrounds, including members of both the civilian and military community.
          </p>
          <div className={styles.team}>
            { team }
          </div>
        </Section>

        <Section title="Our Board" theme="white">
          <div className={styles.board}>
            <BoardCard name={chair.name} role={chair.role} src={chair.src} alt={chair.alt} />
            <BoardCard name={vicechair.name} role={vicechair.role} src={vicechair.src} alt={vicechair.alt} />
            <BoardCard name={treasurer.name} role={treasurer.role} src={treasurer.src} alt={treasurer.alt} />
            <BoardCard name={secretary1.name} role={secretary1.role} src={secretary1.src} alt={secretary1.alt} />
            <BoardCard name={secretary2.name} role={secretary2.role} src={secretary2.src} alt={secretary2.alt} />
            <BoardCard name={secretary3.name} role={secretary3.role} src={secretary3.src} alt={secretary3.alt} />
            <BoardCard name={secretary4.name} role={secretary4.role} src={secretary4.src} alt={secretary4.alt} />
          </div>
        </Section>
      </div>
    );
  }
}

export default Team;
