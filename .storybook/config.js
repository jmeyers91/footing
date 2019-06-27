import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

require('./global.css');

const req = require.context('../src', true, /.story.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    theme: themes.dark
  }
});

configure(loadStories, module);
