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
      executiveStaffMembers: null,
      errorResponse: false
    };
  }

  componentDidMount() {
    axios
      .get('https://api.operationcode.org/api/v1/team_members.json')
      .then((response) => {
        const sortById = members => members.sort((a, b) => a.id - b.id);
        const sortedMembers = sortById(response.data);

        let boardMembers = sortedMembers.filter(x => x.group === 'board');
        let executiveStaffMembers = sortedMembers.filter(x => x.group === 'team');

        // reorder board members so board chair is first
        const isBoardChair = boardMember => boardMember.name === 'David Molina';
        const boardChair = boardMembers.filter(x => isBoardChair(x));
        const nonChairBoardMembers = boardMembers.filter(x => !isBoardChair(x));
        boardMembers = [...boardChair, ...nonChairBoardMembers];

        // add CEO as first member of executive staff, even though he's in group 'board'
        const CEO = boardMembers.filter(x => x.name === 'Conrad Hollomon');
        executiveStaffMembers = [...CEO, ...executiveStaffMembers];

        this.setState({ boardMembers, executiveStaffMembers });
      })
      .catch(() => this.setState({ errorResponse: true }));
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

        <Section title="Our Executive Staff" theme="white">
          <div className={styles.executiveStaff}>
            {this.state.executiveStaffMembers &&
              this.state.executiveStaffMembers.map(staff => (
                <TeamCard
                  key={`${staff.name} + ${staff.role}`}
                  name={staff.name}
                  role={staff.role}
                  slack={staff.slackUsername}
                  email={staff.email}
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
