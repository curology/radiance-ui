import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

export * from './index.stories';

export default {
  title: 'Components/Button/AnchorLinkButton',
  parameters: {
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
