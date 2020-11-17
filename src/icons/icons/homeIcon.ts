import HomeIconPrimary from './svgs/home-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HomeIconPrimary, HomeIconPrimary, props);
