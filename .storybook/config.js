import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/shared/form.js');
}

configure(loadStories, module);
