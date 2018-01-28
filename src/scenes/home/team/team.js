import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import BoardCard from 'shared/components/boardCard/boardCard';
import TeamCard from 'shared/components/teamCard/teamCard';
import BoardMembers from './boardMembers';
import styles from './team.css';


class Team extends Component {
  state = {
    members: [
      { name: 'David Molina', role: 'CEO', slack: '@david', email: 'david@operationcode.org' },
      { name: 'Morgan Larrouy-Smith', role: 'Executive Assistant', slack: '', email: 'morgan@operationcode.org' },
      { name: 'David Reis', role: 'Acting COO', slack: '@davidr', email: '' },
      { name: 'Jennifer Weiderman', role: 'CCMO', slack: '@Jenn', email: 'jennifer@operationcode.org' },
      { name: 'Amy Tan', role: 'CFO', slack: '@amy', email: 'amy@operationcode.org' },
      { name: 'Nell Shamrell', role: 'CTO', slack: '@nellshamrell', email: 'nell@operationcode.org' },
      { name: 'Kate Horner', role: 'Acting CDO', slack: '@katehorner', email: '' },
      { name: 'Kelly MacLeod', role: 'HR', slack: '@kelly', email: 'kelly@operationcode.org' },
      { name: 'Jameel Martin', role: 'Public Policy Director', slack: '@0311-code', email: 'jameel@operationcode.org' },
      { name: 'Stefano DAniello', role: 'General Counsel', slack: '@stefano', email: '' }
    ],
  };

  render() {
    const team = this.state.members.map(member => (
      <TeamCard
        key={`${Math.random()} + ${member.name}`}
        name={member.name}
        role={member.role}
        email={member.email}
        slack={member.slack}
      />
    ));

    const boardMembers = BoardMembers.map(boardMember => (
      <BoardCard
        name={boardMember.name}
        role={boardMember.role}
        description={boardMember.description}
        src={boardMember.src}
      />
    ));

    return (
      <div>
        <QuoteBanner
          author="Abraham Lincoln"
          quote="To care for him who shall have borne the battle and for his widow, and his orphan."
        />

        <Section title="Our Board" theme="white">
          <div className={styles.boardMembers}>{boardMembers}</div>
          <div className={styles.foundingMembers}>
            <p>
              Operation Code deeply appreciates the time, energy, and hard work
              of our <b>Founding Board Members</b>: Aimee Knight, Laura Gomez,
              Pete Runyon, Josh Carter, and Nick Frost.
            </p>

            <p style={{ textAlign: 'center' }}>
              <em>Thank you for setting us up for success!</em>
            </p>
          </div>
        </Section>
        <Section title="Our Team" theme="white">
          <p>
            Our all volunteer staff are dedicated individuals who come from a
            wide variety of backgrounds, including members of both the civilian
            and military community.
          </p>
          <div className={styles.team}>{team}</div>
        </Section>
      </div>
    );
  }
}

export default Team;
