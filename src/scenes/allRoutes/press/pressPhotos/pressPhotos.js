import React from 'react';
import CodeConferencePic from '../../../../images/CodeConferenceLA.jpg';
import RedHatSummitPic from '../../../../images/RedHat-Summit.jpg';
import NodeSummitPic from '../../../../images/Node-Summit.jpg';
import AngelHackBostonPic from '../../../../images/AngelHack-Boston.jpg';
import UtahMeetupPic from '../../../../images/Utah-Meetup.jpg';
import styles from './pressPhotos.css';

function PressPhotos() {
  return (
    <div className={styles.photos}>
      <img src={CodeConferencePic} alt="David Molina speaks to Code Conference LA 2016 attendees." />
      <img src={RedHatSummitPic} alt="Operation Code members pose at Red Hat Summit 2017" />
      <img src={NodeSummitPic} alt="Conrad Hollomon presents in front of the Node Summit 2016 audience." />
      <img src={AngelHackBostonPic} alt="Operation Code developers pose at AngelHack Boston 2017." />
      <img src={UtahMeetupPic} alt="Ken Collier leads a discussion at the Utah Operation Code meetup." />
    </div>
  );
}

export default PressPhotos;
