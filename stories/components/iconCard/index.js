import React from 'react';
import { storiesOf } from '@storybook/react';

import IconCard from 'shared/components/iconCard/iconCard';

storiesOf('shared/components/iconCard', module)
  .add('Default', () => (
    <IconCard
      title="Title"
      fontAwesomeIcon="FaRoad"
    />
  ))
  .add('With subText', () => (
    <IconCard
      title="Title"
      subText="Sub-text showing additional information"
      fontAwesomeIcon="FaGroup"
    />
  ))
  .add('Linked', () => (
    <IconCard
      title="Title"
      subText="http://www.slack.com"
      url="http://www.slack.com"
      fontAwesomeIcon="FaSlack"
    />
  ))
  .add('Sized icon', () => (
    <IconCard
      title="Title"
      fontAwesomeIcon="FaStar"
      iconSize="200"
    />
  ))
  .add('Icon above heading', () => (
    <IconCard
      title="Title"
      fontAwesomeIcon="FaThumbsUp"
      iconAboveHeading
    />
  ))
  .add('Preformatted subtext (using HTML)', () => (
    <IconCard
      title="Title"
      fontAwesomeIcon="FaHtml5"
      subText="<strong>Test</strong><br/>
      <em>Test</em><br/>
      <strike>Test<strike>"
      usingHtml
    />
  ));
