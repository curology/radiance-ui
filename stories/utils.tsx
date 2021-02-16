import React from 'react';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import isChromatic from 'chromatic/isChromatic';
import type { Story } from '@storybook/react';
import { ThemeType } from '../src/constants';

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
interface SecondaryStoryType extends Story {
  storyName: NonNullable<Story['storyName']>;
}

export const decorateStoriesWithTheme = <T extends string>(
  StoryArgs: Record<T, Story>,
  theme = 'secondary',
) => {
  const storiesToDecorate = Object.entries(StoryArgs);

  /**
   * If we add more themes we can expand the generic usage in the return type
   * by hard-casting the other theme names in an if/else block
   */
  const capitalizedTheme = (theme.slice(0, 1).toUpperCase() +
    theme.slice(1)) as 'Secondary';

  const decoratedStories = storiesToDecorate.reduce((acc, InnerStory) => {
    const [storyName, StoryFn] = InnerStory as [string, Story];

    const DecoratedStory: Story = (args) => <StoryFn {...args} />;

    DecoratedStory.parameters = {
      theme,
    };

    const secondaryStoryName = `${storyName}${capitalizedTheme}`;

    DecoratedStory.storyName = secondaryStoryName;

    return {
      ...acc,
      [secondaryStoryName]: DecoratedStory,
    };
  }, {} as Record<`${T}${typeof capitalizedTheme}`, SecondaryStoryType>);

  return decoratedStories;
};
