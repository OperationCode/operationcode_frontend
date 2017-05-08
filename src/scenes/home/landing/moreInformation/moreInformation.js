import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import ClipPathImage from 'shared/components/clipPathImage/clipPathImage';
import familyImage from 'images/Family-1.jpg';

import styles from './moreInformation.css';

class MoreInformation extends Component {
  render() {
    return (
      <Section title="More Information" theme="gray">
        <div className={styles.moreInformation}>
          <ClipPathImage
            title="Military Families and Spouses" image={familyImage}
            altText="" link="#"
          />
          <ClipPathImage
            title="Veterans, Active Duty and Reservists"
            image={familyImage} altText="" link="#"
          />
          <ClipPathImage
            title="Volunteers and Sponsors" image={familyImage}
            altText="" link="#"
          />
        </div>
      </Section>
    );
  }
}

export default MoreInformation;
