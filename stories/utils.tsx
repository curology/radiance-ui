import React from 'react';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import isChromatic from 'chromatic/isChromatic';
import type { Story } from '@storybook/react';

/**
 * Our DialogModal and ImmersiveModals are not fully captured by Chromatic
 * without modifying the canvas dimensions manually.
 *
 * @see: https://www.chromatic.com/docs/viewports#what-if-i-have-a-modal-component-that-doesnt-have-a-width-or-hei
 */
export const modalStoryDecoratorForChromatic = (
  storyFn: () => StoryFnReactReturnType,
) => <div style={{ width: '1200px', height: '1000px' }}>{storyFn()}</div>;

/**
 * To achieve visual regression testing for our non-primary themes, *without* adding
 * more overhead to our Storybook files, we use helper methods such that we export
 * additional, pre-themed stories **only** in the Chromatic environment.
 *
 *
 */
export const chromaticAwareExcludeStories = (excludedStories: string[]) =>
  isChromatic() ? [] : excludedStories;

export const decorateStoryWithTheme = (
  StoryArg: Story,
  theme = 'secondary',
) => {
  const InnerStory: Story = (args) => <StoryArg {...args} />;

  InnerStory.parameters = {
    theme,
  };

  return InnerStory;
};
