import BellIconPrimary from './svgs/bell-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const BellIcon = (props: IconProps) =>
  useIcon(BellIconPrimary, BellIconPrimary, props);
