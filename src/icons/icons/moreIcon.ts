import { MoreIcon, MoreIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MoreIcon, MoreIconSecondary, props);
