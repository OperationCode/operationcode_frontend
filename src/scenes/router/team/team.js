import React, { Component } from 'react';
import axios from 'axios';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import TeamCard from 'shared/components/teamCard/teamCard';
import BoardCard from 'shared/components/boardCard/boardCard';
import BoardMembers from './boardMembers';
import styles from './team.css';

class Team extends Component {
  state = {
    members: [],
  };

  componentDidMount() {
    axios
      .get('https://api.operationcode.org/api/v1/team_members.json')
      .then((response) => {
        this.setState({ members: response.data });
      });
  }

  render() {
    const team = this.state.members.map(member => (
      <TeamCard
        key={`${Math.random()} + ${member.name}`}
        name={member.name}
        role={member.role}
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
