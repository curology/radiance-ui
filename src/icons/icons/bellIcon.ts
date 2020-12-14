import { BellIcon, BellIconSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(BellIcon, BellIconSecondary, props);
