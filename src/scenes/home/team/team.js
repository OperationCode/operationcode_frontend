import React from 'react';
import Section from 'shared/components/section/section';
import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';
import TeamCard from 'shared/components/teamCard/teamCard';
import BoardMembers from './boardMembers';
import ExecutiveStaff from './executiveStaff';
import styles from './team.css';

const Team = () => (
  <div>
    <QuoteBanner
      author="Abraham Lincoln"
      quote="To care for him who shall have borne the battle and for his widow, and his orphan."
    />

    <Section title="Our Board" theme="white">
      <div className={styles.boardMembers}>
        {BoardMembers.map(boardMember => (
          <TeamCard
            key={`${boardMember.name} + ${boardMember.role}`}
            name={boardMember.name}
            role={boardMember.role}
            description={boardMember.description}
            imageSrc={boardMember.imageSrc}
          />
        ))}
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

    <Section title="Our Executive Staff" theme="white">
      <div className={styles.executiveStaff}>
        {ExecutiveStaff.map(staff => (
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

export default Team;
