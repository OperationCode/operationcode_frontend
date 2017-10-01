import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import ImageCard from 'shared/components/imageCard/imageCard';
import image1 from 'images/Family-3.jpg';
import content from './successStoriesContent.json';
import styles from './successStories.css';

class SuccessStories extends Component {
  render() {
    return (
      <Section title="Success Stories" theme="gray">
        <div className={styles.successStoriesContent}>
          <ImageCard
            image={image1}
            title={content.items[0].title}
            cardText={content.items[0].body}
          />
        </div>
      </Section>
    );
  }
}

export default SuccessStories;
