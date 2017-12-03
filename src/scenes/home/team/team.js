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
      role: 'Dr. James Davis is a professor at Louisiana State University, and director of the Stephenson Entrepreneurship Institute. He is also co-founder and chief technology officer of Health Engagements, a startup software development firm specializing in healthcare applications. Dr. Davis is a former captain in the U.S. Army, lieutenant colonel in the U.S. Army Reserve and recipient of the Bronze Star Medal.',
      src: './images/james.jpg',
      alt: 'Head shot of Dr. James Davis'
    };
    const vicechair = {
      name: 'Dr. Tyrone Grandison',
      role: 'Dr. Tyrone Grandison is the Chief Information Officer (CIO) of the Institute of Health Metrics and Evaluation, a global health research center at the University of Washington. Dr. Grandison has over 20 years experience in software engineering, security and privacy. He has led research and product initiatives in RFID data management, privacy-preserving mobile data management, private social network analysis, text analytics and healthcare management systems.',
      src: './images/tyrone.png',
      alt: 'Head shot of Dr. Tyrone Grandison'
    };
    const treasurer = {
      name: 'Elmer Thomas',
      role: 'Elmer Thomas is a developer experience engineer at Sendgrid, and his life goal is to create a positive impact for the greatest number of people over the longest period of time. Elmer is a former United States Marine, a founding board member of Operation Code, treasure and head of our finance committee.',
      src: './images/elmer.png',
      alt: 'Head shot of Elmer Thomas'
    };
    const secretary = {
      name: 'Thomas Ciszec',
      role: 'Thomas Ciszek is a data scientist at Twitter, leading media and entertainment research. Previously, he co-founded Cojoin, an analytics and data visualization startup, led business analytics at GOOD Magazine, and managed search marketing at The Search Agency. He began his research career at The RAND Corporation, and is a big fan of the #bowtie and #sunset.',
      src: './images/thomas.jpg',
      alt: 'Head shot of Thomas Ciszec'
    };
    const board1 = {
      name: 'Liza Rodewald',
      role: 'Liza Rodewald is an entrepreneur, full stack .NET web developer, and co-founder and CTO of MadSkills, a startup helping military spouses find employment. Her first business, LMS Software, has contracted multi-million dollar projects with the government and private sector. Liza, a military spouse, has a passion to see others succeed, and actively advocates for and mentors women in technology.',
      src: './images/liza.png',
      alt: 'Head shot of Liza Rodewald'
    };
    const board2 = {
      name: 'Stacy Chin',
      role: 'Dr. Stacy Chin is the CEO and co-founder of Hydroglyde Coatings, and has a Ph.D in Chemistry from Boston University. Dr. Chin is an entrepreneur, mentor, and active tutor in the graduate sciences. She champions the interests of women in science, technology, engineering and mathematics. Stacy currently serves as head of our fundraising committee.',
      src: './images/stacy.png',
      alt: 'Head shot of Stacy Chin'
    };
    const board3 = {
      name: 'Conrad Hollomon',
      role: 'A former U.S. Army infantry officer and Afghanistan veteran, Conrad Hollomon is a program director at Techstars, one of the most founder-friendly startup accelerators and early stage investors in the world. Conrad is completing his MBA at Boston University with a focus on social impact. In his spare time, he enjoys reading about organizational behavior and trying out new delicious restaurants.',
      src: './images/conrad.png',
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
            <BoardCard name={secretary.name} role={secretary.role} src={secretary.src} alt={secretary.alt} />
            <BoardCard name={board1.name} role={board1.role} src={board1.src} alt={board1.alt} />
            <BoardCard name={board2.name} role={board2.role} src={board2.src} alt={board2.alt} />
            <BoardCard name={board3.name} desc={board3.desc} src={board3.src} alt={board3.alt} />
          </div>
        </Section>
      </div>
    );
  }
}

export default Team;
