import React from 'react';
import Section from 'shared/components/section/section';
import ImageListItem from 'shared/components/imageListItem/imageListItem';
import image1 from 'images/Jon-Deng.jpeg';
import image2 from 'images/Jameel-Matin.jpeg';
import image3 from 'images/Sean-McBride.jpg';
import content from './successStoriesContent.json';
import styles from './successStories.css';

const SuccessStories = () => (
  <Section title="Success Stories" theme="white">
    <div className={styles.successStoriesContent}>
      <ImageListItem image={image1} title={content.items[0].title} cardText={content.items[0].body} />
      <ImageListItem image={image2} title={content.items[1].title} cardText={content.items[1].body} />
      <ImageListItem image={image3} title={content.items[2].title} cardText={content.items[2].body} />
    </div>
  </Section>
);

export default SuccessStories;
