import React, { Component } from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import commonUrl from 'shared/constants/commonLinks';
import styles from './hero.css';

class Hero extends Component {
  state = {
    donateClass: null
  };
  componentDidMount() {
    if (window.innerWidth < 780) {
      this.setState({
        donateClass: 'bordered-white-small'
      });
    } else {
      this.setState({
        donateClass: 'bordered-dark-blue-small'
      });
    }
  }

  render() {
    window.onresize = () => {
      if (window.innerWidth < 780) {
        this.setState({
          donateClass: 'bordered-white-small'
        });
      } else {
        this.setState({
          donateClass: 'bordered-dark-blue-small'
        });
      }
    };
    return (
      <div className={styles.heroContainer}>
        <div className={styles.pageHeading}>
          <h1>Deploy the future!</h1>
          <p>
            The largest community dedicated to helping military veterans and families launch
            software development careers.
          </p>
          <div className={styles.btnContainer}>
            <LinkButton link="/join" text="JOIN US" theme="red-small" />
            <LinkButton
              isExternal
              link={commonUrl.donateLink}
              text="DONATE"
              theme={this.state.donateClass}
            />
          </div>
        </div>

        <div className={styles.embedContainer}>
          <div className={styles.embedVideo}>
            <iframe
              title="The New Developer - Operation Code - GitHub Universe 2016"
              src="https://www.youtube.com/embed/xN7yMoe38xc?modestbranding=1&start=133&showinfo=0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
