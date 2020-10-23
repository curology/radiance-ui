import React from 'react';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';

/**
 * Our DialogModal and ImmersiveModals are not fully captured by Chromatic
 * without modifying the canvas dimensions manually.
 *
 * @see: https://www.chromatic.com/docs/viewports#what-if-i-have-a-modal-component-that-doesnt-have-a-width-or-hei
 */
export const modalStoryDecoratorForChromatic = (storyFn: () => StoryFnReactReturnType) => (
  <div style={{ width: '1200px', height: '1000px' }}>{storyFn()}</div>
);
