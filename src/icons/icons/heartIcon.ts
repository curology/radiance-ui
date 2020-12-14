import { HeartIcon, HeartIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HeartIcon, HeartIconSecondary, props);
