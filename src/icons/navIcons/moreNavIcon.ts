import { MoreNavIcon, MoreNavIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MoreNavIcon, MoreNavIconSecondary, props);
