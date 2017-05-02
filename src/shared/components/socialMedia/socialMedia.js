import React, { Component } from 'react';
import fbImage from 'images/Facebook.svg';
import ghImage from 'images/GitHub.svg';
import twtImage from 'images/Icon-Twitter.svg';
import liImage from 'images/LinkedIn.svg';
import SocialMediaContainer from './socialMediaContainer/socialMediaContainer';
import SocialMediaItem from './socialMediaItem/socialMediaItem';

class SocialMedia extends Component {
  render() {
    return (
      <SocialMediaContainer>
        <SocialMediaItem smImage={fbImage} smText="Facebook" />
        <SocialMediaItem smImage={ghImage} smText="Github" />
        <SocialMediaItem smImage={twtImage} smText="Twitter" />
        <SocialMediaItem smImage={liImage} smText="LinkedIn" />
      </SocialMediaContainer>
    );
  }
}

export default SocialMedia;
