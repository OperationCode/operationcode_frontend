import React from 'react';
import { HashRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { Element } from 'react-scroll';

import LinkButton from 'shared/components/linkButton/linkButton';

const MarginDecorator = storyFn => (
  <div style={{ margin: '16px' }}>
    {storyFn()}
  </div>
);

storiesOf('shared/components/linkButton', module)
  .addDecorator(MarginDecorator)
  .add('Default', () => (
    <HashRouter>
      <LinkButton
        link="/somewhere"
        text="Somewhere"
      />
    </HashRouter>
  ))
  .add('Red', () => (
    <HashRouter>
      <LinkButton
        link="/somewhere"
        text="Somewhere"
        theme="red"
      />
    </HashRouter>
  ))
  .add('External link', () => (
    <LinkButton
      link="http://google.com"
      text="Google"
      isExternal
    />
  ))
  .add('Scroll link', () => (
    <div>
      <LinkButton
        link="anchor"
        text="Scroll"
        scrollLink
      />
      <div style={{ height: '10000px' }} />
      <Element name="anchor">
        <h3>Hello</h3>
      </Element>
    </div>
  ));