import { UserIcon, UserIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(UserIcon, UserIconSecondary, props);
