import { HomeNavIcon, HomeNavIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HomeNavIcon, HomeNavIconSecondary, props);
