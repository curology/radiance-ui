import { css } from '@emotion/core';

import { ANIMATION } from '../../constants';

import { IconProps } from '.';

type IconStylesProps = Pick<IconProps, 'displayInline' | 'fill' | 'rotate'>;

const iconStyles = ({ displayInline, fill, rotate }: IconStylesProps) => css`
  display: ${displayInline ? 'inline-block' : 'block'};
  transform: rotate(${rotate}deg);
  color: ${fill};
  transition: color ${ANIMATION.defaultTiming},
    transform ${ANIMATION.defaultTiming};
`;

export default {
  iconStyles,
};
