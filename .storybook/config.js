import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { backgrounds } from './backgrounds';
import { setOptions } from '@storybook/addon-options';

import 'shared/styles/normalize.global.css';
import 'shared/styles/react-select.global.css';
import 'index.css';

setOptions({
  name: 'Operation Code Storybook',
  url: 'https://ui.operationcode.com'
});

// Dynamically import all files within the `__stories__` folder
const requireStoriesFolder = require.context('../__stories__/', true, /\.js$/);

// Dynamically load all files within shared/components matching `{componentName}.story.js` pattern
const requireAgCommonFolder = require.context('../src/shared/components/', true, /story\.js$/);

function loadStories() {
  requireStoriesFolder.keys().forEach(requireStoriesFolder);
  requireAgCommonFolder.keys().forEach(requireAgCommonFolder);
}

configure(loadStories, module);
