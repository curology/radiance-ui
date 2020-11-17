import LogoutIconPrimary from './svgs/logout-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LogoutIconPrimary, LogoutIconPrimary, props);
