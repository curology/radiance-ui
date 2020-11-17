import HomeIconPrimary from './svgs/home-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const HomeIcon = (props: IconProps) =>
  useIcon(HomeIconPrimary, HomeIconPrimary, props);
