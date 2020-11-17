import React from 'react';
// import {  propTypes } from 'src/utils/icons';

import { IconProps } from '../../src/shared-components/icon';

/**
 * We construct a mock Icon components to use Storybook's ArgsTable functionality.
 * We do not have icons available as React Components outside of our build process
 */
export const MockIcon = ({
  className,
  fill,
  height = 16,
  inline,
  rotate = 0,
  width = 16,
}: IconProps) => (
  <svg
    className={className}
    fill={fill}
    height={height}
    // @ts-ignore, TODO-TS: Rename inline to avoid passing to DOM, only used for styles
    inline={inline}
    rotate={rotate}
    width={width}
  />
);

// MockIcon.propTypes = propTypes;
