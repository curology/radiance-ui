import StarFilledIconPrimary from './svgs/star-filled-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const StarFilledIcon = (props: IconProps) =>
  useIcon(StarFilledIconPrimary, StarFilledIconPrimary, props);
