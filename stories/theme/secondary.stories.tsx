import { Meta } from '@storybook/react';

export * from './index.stories';

export default {
  title: 'Constants/Theme/Secondary',
  parameters: {
    theme: 'secondary',
  },
  excludeStories: /.*/,
} as Meta;
