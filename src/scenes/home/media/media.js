import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './media.css';

class Media extends Component {
  render() {
    return (
      <div>
        <Section title="Media" theme="white">
          <p>
            Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah.
          </p>

          <br />
          <br />
          <h6>For representatives of...</h6>
          <br />
          <br />

          <div className={styles.flexContainer}>
            <div className={styles.threeColumn}>
              <h4>Code Schools</h4>
              <p>
                Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah.
              </p>
            </div>

            <div className={styles.threeColumn}>
              <h4>Potential Partners</h4>
              <p>
                Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah.
              </p>
            </div>

            <div className={styles.threeColumn}>
              <h4>Media Outlets</h4>
              <p>
                Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah.
              </p>
            </div>
          </div>
        </Section>

        <Section title="" headLines={false}>
          <div className={styles.flexContainer}>
            <div className={styles.twoColumn}>
              <h4>Videos</h4>
              <p>
                Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah.
              </p>
            </div>

            <div className={styles.twoColumn}>
              <h4>Photos</h4>
              <p>
                Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah. Lorem Ipsum Blabbity Blah.
              </p>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default Media;
