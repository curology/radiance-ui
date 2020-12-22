import { LockIcon, LockIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(LockIcon, LockIconSecondary, props);
