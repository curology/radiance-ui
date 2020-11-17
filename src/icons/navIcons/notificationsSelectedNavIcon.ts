import NotificationsSelectedNavIconPrimary from './svgs/notifications-selected-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const NotificationsSelectedNavIcon = (props: IconProps) =>
  useIcon(
    NotificationsSelectedNavIconPrimary,
    NotificationsSelectedNavIconPrimary,
    props,
  );
