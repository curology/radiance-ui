import { HomeSelectedNavIcon, HomeSelectedNavIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HomeSelectedNavIcon, HomeSelectedNavIconSecondary, props);
