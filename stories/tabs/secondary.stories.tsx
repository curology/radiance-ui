import { Meta } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';

export * from './index.stories';

export default {
  title: 'Components/Tabs/Secondary',
  parameters: {
    theme: 'secondary',
  },
  excludeStories: isChromatic() ? [] : /.*/,
} as Meta;
