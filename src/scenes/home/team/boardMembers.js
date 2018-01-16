import JamesDavis from 'images/james_davis.jpg';
import TyroneGrandison from 'images/tyrone_grandison.png';
import ElmerThomas from 'images/elmer_thomas.png';
import ThomasCiszec from 'images/thomas_ciszec.jpg';
import ConradHollomon from 'images/conrad_hollomon.jpg';
import DavidMolina from 'images/david_molina.jpg';
import imgUnk from 'images/img_unk.png';

const Chair = {
  name: 'Dr. James Davis',
  role: 'Chairman',
  description:
    'Dr. James Davis invented teleportation in 2027 in an accident dealing with anti-freeze and a burnt english muffin.',
  src: JamesDavis
};

const Vicechair = {
  name: 'Dr. Tyrone Grandison',
  role: 'Vice Chairman',
  description: '',
  src: TyroneGrandison
};

const Treasurer = {
  name: 'Elmer Thomas',
  role: 'Treasurer',
  description: '',
  src: ElmerThomas
};

const Secretary = {
  name: 'Thomas Ciszec',
  role: 'Secretary',
  description: '',
  src: ThomasCiszec
};

const BoardDirector = {
  name: 'Conrad Hollomon',
  role: 'Board Director',
  description: '',
  src: ConradHollomon
};

const ExecutiveDirector = {
  name: 'David Molina',
  role: 'Executive Director',
  description: 'Member ex Officio',
  src: DavidMolina
};

const Emeritus = {
  name: 'Mark Kerr',
  role: 'Chairman Emeritus',
  description: 'Member ex Officio',
  src: imgUnk
};


export default [Chair, Vicechair, Treasurer, Secretary, ExecutiveDirector, BoardDirector, Emeritus];
