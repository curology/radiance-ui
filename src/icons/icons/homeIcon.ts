import { HomeIcon, HomeIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HomeIcon, HomeIconSecondary, props);
