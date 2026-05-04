import type { View } from '@storybook/react-native';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { view } = require('./storybook.requires') as { view: View };

const StorybookUIRoot = view.getStorybookUI({
  shouldPersistSelection: false,
});

export default StorybookUIRoot;

