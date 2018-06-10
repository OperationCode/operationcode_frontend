import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import ImageCard from 'shared/components/imageCard/imageCard';
import edxLogo from 'images/moocLogos/edx.jpg';
import treehouseLogo from 'images/moocLogos/treehouse.jpg';
import udacityLogo from 'images/moocLogos/udacity.jpg';
import styles from './moocSchools.css';

class MoocSchools extends Component {
  render() {
    return (
      <div>
        <Section id="moocSchools" title="MOOCs" headingLines={false} theme="white">
          <p>
            Massive, Open, Online Courses (or MOOCs) are course study programs made available over
            the internet!
            <br />
            Typically there are start and end dates, but the work itself is done at your own pace.
            <br />
            MOOCs are usually free, but there are certain benefits to paying for premium aspects of
            MOOCs.
            <br />
          </p>

          <div className={styles.moocCards}>
            <ImageCard
              image={edxLogo}
              title="edX"
              cardText="Offers free courses with the option to pay for certificates/grading."
              buttonText="Website"
              link="https://edx.org/"
            />
            <ImageCard
              image={treehouseLogo}
              title="Team Treehouse"
              cardText="Offers only paid programs, but we have licenses available."
              buttonText="Website"
              link="https://teamtreehouse.com/"
            />
            <ImageCard
              image={udacityLogo}
              title="Udacity"
              cardText="Offers free courses with the option to pay for certificates/grading."
              buttonText="Website"
              link="https://udacity.com/"
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default MoocSchools;
