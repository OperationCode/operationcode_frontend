import { configure } from '@storybook/react';

import 'shared/styles/normalize.global.css';
import 'shared/styles/react-table.global.css';
import 'shared/styles/react-select.global.css';
import 'index.css';

const req = require.context('../stories', true, /\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
