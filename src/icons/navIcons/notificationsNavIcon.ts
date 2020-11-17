import NotificationsNavIconPrimary from './svgs/notifications-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const NotificationsNavIcon = (props: IconProps) =>
  useIcon(NotificationsNavIconPrimary, NotificationsNavIconPrimary, props);
