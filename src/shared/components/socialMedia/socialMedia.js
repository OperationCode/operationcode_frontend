import React, { Component } from 'react';
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
        <SocialMediaItem smImage={fbImage} smText="Facebook" link="https://facebook.com/operationcode.org" target="_blank" rel="noopener noreferrer" />
        <SocialMediaItem smImage={ghImage} smText="Github" link="https://github.com/operationcode" target="_blank" rel="noopener noreferrer" />
        <SocialMediaItem smImage={twtImage} smText="Twitter" link="https://twitter.com/operation_code" target="_blank" rel="noopener noreferrer" />
        <SocialMediaItem smImage={liImage} smText="LinkedIn" link="https://www.linkedin.com/groups/13400924" target="_blank" rel="noopener noreferrer" />
      </SocialMediaContainer>
    );
  }
}

export default SocialMedia;
