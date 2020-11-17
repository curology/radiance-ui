import CircleSolidIconPrimary from './svgs/circle-solid-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const CircleSolidIcon = (props: IconProps) =>
  useIcon(CircleSolidIconPrimary, CircleSolidIconPrimary, props);
