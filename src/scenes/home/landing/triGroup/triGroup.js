import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
import OutboundLink from 'shared/components/outboundLink/outboundLink';
import blueMedalLogo from 'images/logos/small-blue-medal.png';
import redMedalLogo from 'images/logos/small-red-medal.png';
import commonUrl from 'shared/constants/commonLinks';
import styles from './triGroup.css';

const TriGroup = () => {
  const ClickableLogo = ({ color, isExternal, logo, text, url }) => {
    ClickableLogo.propTypes = {
      color: PropTypes.string.isRequired,
      isExternal: PropTypes.bool,
      logo: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    };

    ClickableLogo.defaultProps = {
      isExternal: false
    };

    return (
      <div className={styles.clickableLogo}>
        <OutboundLink href={url}>
          <img src={logo} alt="Colored Medal Logo" />
        </OutboundLink>

        <LinkButton
          link={url}
          text={text}
          theme={color}
          isExternal={isExternal}
        />
      </div>
    );
  };

  return (
    <div className={styles.triGroupContainer}>
      <ClickableLogo
        color="red"
        logo={redMedalLogo}
        text="Join Us!"
        url="/join"
      />

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

      <ClickableLogo
        color="blue"
        isExternal
        logo={blueMedalLogo}
        text="Donate Now!"
        url={commonUrl.donateLink}
      />
    </div>
  );
};

export default TriGroup;
