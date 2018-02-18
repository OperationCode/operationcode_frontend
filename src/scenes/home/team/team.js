import React, { Component } from 'react';
import axios from 'axios';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import TeamCard from 'shared/components/teamCard/teamCard';
import styles from './team.css';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamMembers: null,
      errorResponse: false
    };
  }

  componentDidMount() {
    axios
      .get('https://api.operationcode.org/api/v1/team_members')
      .then(response => this.setState({ teamMembers: response.data }))
      .catch(() => this.setState({ errorResponse: true }));
  }

  render() {
    return (
      <div>
        <QuoteBanner
          author="Abraham Lincoln"
          quote="To care for him who shall have borne the battle and for his widow, and his orphan."
        />

        {this.state.errorResponse && (
          <p className={styles.teamError}>
            Whoops! Something went wrong… please check back later.
          </p>
        )}

        {this.state.teamMembers && (
          <Section title="Our Board" theme="white">
            <div className={styles.boardMembers}>
              {this.state.teamMembers
                .filter(board => board.group === 'board')
                .map(members => (
                  <TeamCard
                    key={`${members.name} + ${members.role}`}
                    name={members.name}
                    role={members.role}
                    description={members.description}
                    imageSrc={members.image_src}
                  />
                ))
              }
            </div>

            <div className={styles.foundingMembers}>
              <p>
                Operation Code deeply appreciates the time, energy, and hard work of
                our <b>Founding Board Members</b>: Aimee Knight, Laura Gomez, Pete
                Runyon, Josh Carter, and Nick Frost.
              </p>
              <p style={{ textAlign: 'center' }}>
                <em>Thank you for setting us up for success!</em>
              </p>
            </div>
          </Section>
        )}

        {this.state.teamMembers && (
          <Section title="Our Executive Staff" theme="white">
            <div className={styles.executiveStaff}>
              {this.state.teamMembers
                .filter(executive => executive.group !== 'board')
                .map(members => (
                  <TeamCard
                    key={`${members.name} + ${members.role}`}
                    name={members.name}
                    role={members.role}
                    slack={members.slackUsername}
                    email={members.email}
                    isBoard={false}
                  />
                ))
              }
            </div>
          </Section>
        )}
      </div>
    );
  }
}

export default Team;
