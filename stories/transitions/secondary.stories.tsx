import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

export * from './index.stories';

export default {
  title: 'Components/Transitions/Secondary',
  parameters: {
    chromatic: { disabled: true },
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
