import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

export * from './index.stories';

export default {
  title: 'Components/Alert/Secondary',
  parameters: {
    /**
     * TODO: Figure out how to get Alerts to show up on Chromatic
     */
    chromatic: { disable: true },
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
