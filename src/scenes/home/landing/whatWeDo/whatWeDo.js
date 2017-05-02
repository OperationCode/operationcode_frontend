import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import ImageCard from './imageCard/imageCard';
import content from './whatWeDoContent.json';

class WhatWeDo extends Component {
  render() {
    return (
      <Section title="What We Do">
        {content.items.map(item =>
          <ImageCard
            image={item.imageUrl}
            title={item.title}
            cardText={item.body}
            buttonText={item.buttonText}
            link={item.linkTo}
          />
        )}
      </Section>
    );
  }
}

export default WhatWeDo;
