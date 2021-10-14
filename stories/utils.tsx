import React from 'react';
import isChromatic from 'chromatic';
import type { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

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
 * We exclude stories that exists only for Chromatic visual testing from non-Chromatic environments
 */
export const excludeStoriesForNonChromaticEnvironments = (
  stories: string[] = [],
) => (isChromatic() ? stories : /.*/);
