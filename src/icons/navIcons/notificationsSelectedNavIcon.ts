import {
  NotificationsSelectedNavIcon,
  NotificationsSelectedNavIconSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(
    NotificationsSelectedNavIcon,
    NotificationsSelectedNavIconSecondary,
    props,
  );
