import { CrossIcon, CrossIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CrossIcon, CrossIconSecondary, props);
