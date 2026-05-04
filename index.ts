import { registerRootComponent } from 'expo';

import './global.css';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

if (storybookEnabled) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const StorybookUIRoot = require('./.rnstorybook').default;

  registerRootComponent(StorybookUIRoot);
} else {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('expo-router/entry');
}

