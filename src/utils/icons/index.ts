// If you change the  name of this file, update iconTemplate.js
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { ANIMATION } from '../../constants';

export const propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inline: PropTypes.bool,
  /**
   * Clockwise rotation, in degrees
   */
  rotate: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const defaultProps = {
  height: 16,
  rotate: 0,
  width: 16,
};

export type IconsProps = {
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
 * TODO: Rename `inline` prop usage so that we do not pass it to the DOM, which raises warnings
 */
export const iconStyles = (props: IconsProps) => css`
  display: ${props.inline ? 'inline-block' : 'block'};
  transform: rotate(${props.rotate}deg);
  color: ${props.fill};
  transition: color ${ANIMATION.defaultTiming},
    transform ${ANIMATION.defaultTiming};
`;
