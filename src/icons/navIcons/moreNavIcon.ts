import MoreNavIconPrimary from './svgs/more-nav-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MoreNavIcon = (props: IconProps) =>
  useIcon(MoreNavIconPrimary, MoreNavIconPrimary, props);
