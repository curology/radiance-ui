import { LogoutIcon, LogoutIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LogoutIcon, LogoutIconSecondary, props);
