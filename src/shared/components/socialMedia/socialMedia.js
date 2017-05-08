import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fbImage from 'images/icons/Facebook-Icon.svg';
import ghImage from 'images/icons/GitHub-Icon.svg';
import twtImage from 'images/icons/Twitter-Icon.svg';
import liImage from 'images/icons/LinkedIn-Icon.svg';
import SocialMediaContainer from './socialMediaContainer/socialMediaContainer';
import SocialMediaItem from './socialMediaItem/socialMediaItem';

class SocialMedia extends Component {
  render() {
    return (
      <SocialMediaContainer>
        <Link to="https://facebook.com/operationcode.org">
          <SocialMediaItem smImage={fbImage} smText="Facebook" />
        </Link>
        <Link to="https://github.com/operationcode">
          <SocialMediaItem smImage={ghImage} smText="Github" />
        </Link>
        <Link to="https://twitter.com/operation_code">
          <SocialMediaItem smImage={twtImage} smText="Twitter" />
        </Link>
        <Link to="https://www.linkedin.com/groups/13400924">
          <SocialMediaItem smImage={liImage} smText="LinkedIn" />
        </Link>
      </SocialMediaContainer>
    );
  }
}

export default SocialMedia;
