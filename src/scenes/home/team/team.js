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
      boardMembers: null,
      staffMembers: null,
      errorResponse: false
    };
  }

  componentDidMount() {
    axios
      .get('https://api.operationcode.org/api/v1/team_members.json')
      .then((response) => {
        const boardMembers = response.data.filter(x => x.group === 'board');
        const staffMembers = response.data.filter(x => x.group === 'team');
        const boardChair = 'David Molina';
        const CEO = 'Conrad Hollomon';

        this.setState({
          boardMembers: this.getOrderedGroup(boardMembers, boardChair),
          staffMembers: this.getOrderedGroup(staffMembers, CEO)
        });
      })
      .catch(() => this.setState({ errorResponse: true }));
  }

  // returns ordered board/staff group w/ group leader first
  getOrderedGroup = (group, leaderName) => {
    const isLeader = member => member.name === leaderName;
    const sortedMembers = group.sort((a, b) => a.id - b.id);
    const leader = sortedMembers.filter(x => isLeader(x));
    const remainingMembers = sortedMembers.filter(x => !isLeader(x));
    return [...leader, ...remainingMembers];
  }

  render() {
    return (
      <div>
        <QuoteBanner
          author="Abraham Lincoln"
          quote="To care for him who shall have borne the battle and for his widow, and his orphan."
        />

        <Section title="Our Board" theme="white">
          <div className={styles.boardMembers}>
            {this.state.boardMembers &&
              this.state.boardMembers.map(boardMember => (
                <TeamCard
                  key={`${boardMember.name} + ${boardMember.role}`}
                  name={boardMember.name}
                  role={boardMember.role}
                  description={boardMember.description}
                  imageSrc={boardMember.image_src}
                />
              ))}
          </div>
          <div className={styles.foundingMembers}>
            <p>
              Operation Code deeply appreciates the time, energy, and hard work
              of our <b>Founding Board Members</b>, including Mark Kerr (Chair),
              Laura Gomez (Vice Chair), Dr. Tyrone Grandison (Vice Chair), Dr. Stacy
              Chin (Director of Fundraising Committee), Liza Rodewald (Director of
              Military Families Committee), Pete Runyon (Secretary/ Treasurer), Josh
              Carter, Nick Frost, and Aimee Knight on their support, dedication and
              commitment in the early days.
            </p>

            <p style={{ textAlign: 'center' }}>
              <em>Thank you for setting us up for success!</em>
            </p>
          </div>
        </Section>

        <Section title="Our Staff" theme="white">
          <div className={styles.staffMembers}>
            {this.state.staffMembers &&
              this.state.staffMembers.map(staffMember => (
                <TeamCard
                  key={`${staffMember.name} + ${staffMember.role}`}
                  name={staffMember.name}
                  role={staffMember.role}
                  slack={staffMember.slackUsername}
                  email={staffMember.email}
                  isBoard={false}
                />
              ))}
          </div>
        </Section>
      </div>
    );
  }
}

export default Team;
