import React from 'react';
import { defaultProps, propTypes } from 'src/utils/icons';

type IconsProps = {
  className?: string;
  fill?: string;
  height?: string | number;
  inline?: boolean;
  /**
   * Clockwise rotation, in degrees
   */
  rotate?: number;
  width?: string | number;
};

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
}: IconsProps) => (
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

MockIcon.propTypes = propTypes;
MockIcon.defaultProps = defaultProps;
