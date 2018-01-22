import JamesDavis from 'images/james_davis.jpg';
import TyroneGrandison from 'images/tyrone_grandison.png';
import ElmerThomas from 'images/elmer_thomas.png';
import ThomasCiszec from 'images/thomas_ciszec.jpg';
import LizaRodewald from 'images/liza_rodewald.png';
import StacyChin from 'images/stacy_chin.png';
import ConradHollomon from 'images/conrad_hollomon.jpg';
import DavidMolina from 'images/david_molina.jpg';
import imageUnknown from 'images/img_unk.png';

const Chair = {
  name: 'Dr. James Davis',
  role: 'Chairman',
  description:
    'Dr. James Davis is a professor at Louisiana State University, and director of the Stephenson Entrepreneurship Institute. He is also co-founder and chief technology officer of Health Engagements, a startup software development firm specializing in healthcare applications. Dr. Davis is a former captain in the U.S. Army, lieutenant colonel in the U.S. Army Reserve and recipient of the Bronze Star Medal.',
  src: JamesDavis,
};

const Vicechair = {
  name: 'Dr. Tyrone Grandison',
  role: 'Vice Chairman',
  description:
    'Dr. Tyrone Grandison is the Chief Information Officer (CIO) of the Institute of Health Metrics and Evaluation, a global health research center at the University of Washington. Dr. Grandison has over 20 years experience in software engineering, security and privacy. He has led research and product initiatives in RFID data management, privacy-preserving mobile data management, private social network analysis, text analytics and healthcare management systems.',
  src: TyroneGrandison,
};

const Treasurer = {
  name: 'Elmer Thomas',
  role: 'Treasurer',
  description:
    'Elmer Thomas is a developer experience engineer at Sendgrid, and his life goal is to create a positive impact for the greatest number of people over the longest period of time. Elmer is a former United States Marine, a founding board member of Operation Code, treasure and head of our finance committee.',
  src: ElmerThomas,
};

const Secretary = {
  name: 'Thomas Ciszec',
  role: 'Secretary',
  description:
    'Thomas Ciszek is a data scientist at Twitter, leading media and entertainment research. Previously, he co-founded Cojoin, an analytics and data visualization startup, led business analytics at GOOD Magazine, and managed search marketing at The Search Agency. He began his research career at The RAND Corporation, and is a big fan of the #bowtie and #sunset.',
  src: ThomasCiszec,
};

const BoardDirector = {
  name: 'Conrad Hollomon',
  role: 'Board Director',
  description:
    'A former U.S. Army infantry officer and Afghanistan veteran, Conrad Hollomon is a program director at Techstars, one of the most founder-friendly startup accelerators and early stage investors in the world. Conrad is completing his MBA at Boston University with a focus on social impact. In his spare time, he enjoys reading about organizational behavior and trying out new delicious restaurants.',
  src: ConradHollomon,
};

const ExecutiveDirector = {
  name: 'David Molina',
  role: 'Executive Director',
  description: 'Member Ex Officio',
  src: DavidMolina,
};

const MilFamCommitteeDirector = {
  name: 'Liza Rodewald',
  role: 'Director of Military Families Committee',
  description:
    'Liza Rodewald is an entrepreneur, full stack .NET web developer, and co-founder and CTO of MadSkills, a startup helping military spouses find employment. Her first business, LMS Software, has contracted multi-million dollar projects with the government and private sector. Liza, a military spouse, has a passion to see others succeed, and actively advocates for and mentors women in technology.',
  src: LizaRodewald,
};

const FundraisingCommitteeDirector = {
  name: 'Stacy Chin',
  role: 'Director of Fundraising Committee',
  description:
    'Dr. Stacy Chin is the CEO and co-founder of Hydroglyde Coatings, and has a Ph.D in Chemistry from Boston University. Dr. Chin is an entrepreneur, mentor, and active tutor in the graduate sciences. She champions the interests of women in science, technology, engineering and mathematics. Stacy currently serves as head of our fundraising committee.',
  src: StacyChin,
};

const Emeritus = {
  name: 'Mark Kerr',
  role: 'Chairman Emeritus',
  description: 'Member Ex Officio',
  src: imageUnknown,
};

export default [
  Chair,
  Vicechair,
  Treasurer,
  Secretary,
  ExecutiveDirector,
  BoardDirector,
  MilFamCommitteeDirector,
  FundraisingCommitteeDirector,
  Emeritus,
];
