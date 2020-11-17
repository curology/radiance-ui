import HeartIconPrimary from './svgs/heart-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const HeartIcon = (props: IconProps) =>
  useIcon(HeartIconPrimary, HeartIconPrimary, props);
