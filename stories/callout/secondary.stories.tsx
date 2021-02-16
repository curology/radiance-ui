import { Meta } from '@storybook/react';

export * from './index.stories';

export default {
  title: 'Components/Callout/Secondary',
  parameters: {
    theme: 'secondary',
  },
  excludeStories: /.*/,
} as Meta;
