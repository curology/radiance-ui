import RotateIconPrimary from './svgs/rotate-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const RotateIcon = (props: IconProps) =>
  useIcon(RotateIconPrimary, RotateIconPrimary, props);
