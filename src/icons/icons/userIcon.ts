import UserIconPrimary from './svgs/user-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const UserIcon = (props: IconProps) =>
  useIcon(UserIconPrimary, UserIconPrimary, props);
