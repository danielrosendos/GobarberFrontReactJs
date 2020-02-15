import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';

import GlobalStyle from '../src/styles/global';
import AuthLayout from '../src/pages/_layouts/auth';
import DefaultLayout from '../src/pages/_layouts/default';

const withGlobal = Story => (
  <>
    <Story />
    <GlobalStyle />
  </>
);

addDecorator(withInfo);
addDecorator(centered);
addDecorator(withGlobal);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
