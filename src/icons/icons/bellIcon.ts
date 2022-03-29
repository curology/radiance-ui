import { BellIcon, BellIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(BellIcon, BellIconSecondary, props);
