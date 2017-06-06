import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import SchoolCard from 'shared/components/schoolCard/schoolCard';
import ImageCard from 'shared/components/imageCard/imageCard';
import edxLogo from 'images/moocLogos/edx.jpg';
import treehouseLogo from 'images/moocLogos/treehouse.jpg';
import udacityLogo from 'images/moocLogos/udacity.jpg';
import styles from './onlineSchools.css';

const gettingSchoolData = fetch('https://api.operationcode.org/api/v1/code_schools.json')
  .then(response => response.json());

class OnlineSchools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eSchools: null
    };

    gettingSchoolData.then(data =>
      this.setState({ eSchools: data })
    );
  }

  render() {
    const eSchools = !this.state.eSchools ? null : this.state.eSchools
      .filter(school => school.has_online)
      .map(school =>
        (
          <SchoolCard
            key={school.name}
            alt={school.name}
            schoolName={school.name}
            link={school.url}
            schoolAddress="Online"
            logo={school.logo}
            GI={school.va_accepted ? 'Yes' : 'No'}
            fullTime={school.full_time ? 'Full-Time' : 'Flexible'}
            hardware={school.hardware_included ? 'Yes' : 'No'}
          />
        )
      );

    return (
      <Section
        id="onlineSchools"
        title="Online Schools"
        headingLines={false}
        margin
      >
        <div className={styles.intro}>
          <p className={styles.leadingParagraph}>
            Many programs offer coding schools in a completely digital fashion. <br />Regardless of where
            you are in the world, you can learn how to code through these programs!
          </p>
        </div>

        <div className={styles.eSchools}>
          {eSchools}
        </div>

        <div className={styles.moocs}>
          <h3>MOOCs</h3>
          <p className={styles.leadingParagraph}>
            Massive, Open, Online Courses (or MOOCs) are course study programs made available over
            the internet!
            <br />
            Typically there are start and end dates, but the work itself is done at your own pace.
            <br />MOOCs are usually free, but there are certain benefits to paying for premium aspects
            of MOOCs.
            <br />
          </p>

          <div className={styles.moocCards}>
            <ImageCard
              image={edxLogo}
              title={'edX'}
              cardText={'Offers free courses with the option to pay for certificates/grading.'}
              buttonText={'Website'}
              link={'https://edx.org/'}
            />
            <ImageCard
              image={treehouseLogo}
              title={'Team Treehouse'}
              cardText={'Offers only paid programs, but we have licenses available.'}
              buttonText={'Website'}
              link={'https://teamtreehouse.com/'}
              className={styles.boxShadow}
            />
            <ImageCard
              image={udacityLogo}
              title={'Udacity'}
              cardText={'Offers free courses with the option to pay for certificates/grading.'}
              buttonText={'Website'}
              link={'https://udacity.org/'}
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default OnlineSchools;
