import { storiesOf } from '@storybook/react';
import React from 'react';

import Dashboard from '../../src/pages/Dashboard';

storiesOf('Pages|Dashboard', module)
  .addParameters({
    centered: {
      disable: true,
    },
    info: {
      disable: true,
    },
  })
  .add('default', () => <Dashboard />);
