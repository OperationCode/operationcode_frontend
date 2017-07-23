import React from 'react';
import styles from './pressVideos.css';

function PressVideos() {
  return (
    <div className={styles.videos}>
      <iframe title="GitHub Universe: Operation Code" src="https://www.youtube.com/embed/xN7yMoe38xc" frameBorder="0" allowFullScreen width="889" height="500" />
      <iframe title="GitHub Universe: Operation Code" src="https://player.vimeo.com/video/124866675?byline=0&portrait=0" frameBorder="0" allowFullScreen width="889" height="500" />
    </div>
  );
}

export default PressVideos;
