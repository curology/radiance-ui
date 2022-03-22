import { MoreSelectedNavIcon, MoreSelectedNavIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MoreSelectedNavIcon, MoreSelectedNavIconSecondary, props);
