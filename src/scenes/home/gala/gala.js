import React from 'react';
import commonUrl from 'shared/constants/commonLinks';
import LinkButton from 'shared/components/linkButton/linkButton';
import Styles from './gala.css';

const Gala = () => (
  <div className={Styles.hero}>
    <div className={Styles.heading}>
      <h1 className="mast__title js-spanize">Operation Code</h1>
      <h2 className="mast__title js-spanize">Deploy the Future Gala 2018</h2>
      <p>Save the Date: Saturday, November 10th, 2018</p>
      <p>
        <a
          href="mailto:staff@operationcode.org"
          target="_blank"
          rel="noopener noreferrer"
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
    </div>
  </div>
);

export default Gala;
