import CircleMinusIconPrimary from './svgs/circle-minus-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const CircleMinusIcon = (props: IconProps) =>
  useIcon(CircleMinusIconPrimary, CircleMinusIconPrimary, props);
