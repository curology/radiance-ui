import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import DIALOG_MODAL_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${DIALOG_MODAL_STORIES.title}/Secondary`,
  parameters: {
    chromatic: DIALOG_MODAL_STORIES.parameters.chromatic,
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
