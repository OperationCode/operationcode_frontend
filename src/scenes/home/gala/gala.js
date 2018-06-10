import React from 'react';
import ReactRevealText from 'react-reveal-text';
import commonUrl from 'shared/constants/commonLinks';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './gala.css';

class Gala extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }

  render() {
    return (
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1>
            <ReactRevealText show={this.state.show}>
              Operation Code
            </ReactRevealText>
          </h1>
          <h2>
            <ReactRevealText show={this.state.show}>
              Deploy the Future Gala 2018
            </ReactRevealText>
          </h2>
          <p>Saturday, November 10th, 2018</p>
          <p>
            <a
              href="mailto:staff@operationcode.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.galaLink}
            >
              Contact us
            </a>{' '}
            for sponsorship information.
          </p>
          <LinkButton
            role="button"
            text="Donate"
            theme="blue"
            link={commonUrl.donateLink}
            isExternal
          />
          <p>Check back for more information.</p>
        </div>
      </div>
    );
  }
}

export default Gala;
