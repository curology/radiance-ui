import HeartIconPrimary from './svgs/heart-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HeartIconPrimary, HeartIconPrimary, props);
