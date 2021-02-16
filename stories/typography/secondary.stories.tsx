import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

export * from './index.stories';

export default {
  title: 'Components/Typography/Secondary',
  parameters: {
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;