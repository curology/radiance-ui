import LogoutIconPrimary from './svgs/logout-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const LogoutIcon = (props: IconProps) =>
  useIcon(LogoutIconPrimary, LogoutIconPrimary, props);
