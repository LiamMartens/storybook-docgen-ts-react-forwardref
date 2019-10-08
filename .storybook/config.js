import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

configure(require.context('../src', true, /\.stories\.tsx$/), module);
addDecorator(withInfo);
addParameters({
  showPanel: true,
  info: {
    source: true,
  },
})
