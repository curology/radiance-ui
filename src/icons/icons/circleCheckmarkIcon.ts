import CircleCheckmarkIconPrimary from './svgs/circle-checkmark-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const CircleCheckmarkIcon = (props: IconProps) =>
  useIcon(CircleCheckmarkIconPrimary, CircleCheckmarkIconPrimary, props);
