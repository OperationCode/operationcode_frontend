import React from 'react';
import Section from 'shared/components/section/section';
import ImageCard from 'shared/components/imageCard/imageCard';
import image1 from 'images/General-Couple-Computer.jpg';
import image2 from 'images/General-Group-Coffee.jpg';
import image3 from 'images/ThinkstockPhotos-489787502.jpg';
import image4 from 'images/rhs2017_photo.jpg';
import content from './whatWeDoContent.json';
import styles from './whatWeDo.css';

const WhatWeDo = () => (
  <Section title="What We Do" theme="gray">
    <div className={styles.whatWeDoContent}>
      <ImageCard
        image={image1}
        title={content.items[0].title}
        cardText={content.items[0].body}
      />
      <ImageCard
        image={image2}
        title={content.items[1].title}
        cardText={content.items[1].body}
      />
      <ImageCard
        image={image3}
        title={content.items[2].title}
        cardText={content.items[2].body}
      />
      <ImageCard
        image={image4}
        title={content.items[3].title}
        cardText={content.items[3].body}
      />
    </div>
  </Section>
);

export default WhatWeDo;
