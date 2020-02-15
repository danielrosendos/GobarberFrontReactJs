import { storiesOf } from '@storybook/react';
import React from 'react';

import AuthLayout from '../../../src/pages/_layouts/auth';

storiesOf('Pages|AuthLayout', module)
  .addParameters({
    centered: {
      disable: true,
    },
    info: {
      disable: true,
    },
  })
  .add('default', () => <AuthLayout />);
