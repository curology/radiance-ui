import { HomeNavIcon, HomeNavIconSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HomeNavIcon, HomeNavIconSecondary, props);
