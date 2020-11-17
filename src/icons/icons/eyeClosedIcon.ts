import EyeClosedIconPrimary from './svgs/eye-closed-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const EyeClosedIcon = (props: IconProps) =>
  useIcon(EyeClosedIconPrimary, EyeClosedIconPrimary, props);
