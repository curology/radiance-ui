import LockIconPrimary from './svgs/lock-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LockIconPrimary, LockIconPrimary, props);
