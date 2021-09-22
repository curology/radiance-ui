import { css } from '@emotion/react';

import { ANIMATION } from '../../constants';

import { IconProps } from '.';

type IconStylesProps = Required<Pick<IconProps, 'displayInline' | 'rotate'>> &
  Pick<IconProps, 'fill'>;

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
