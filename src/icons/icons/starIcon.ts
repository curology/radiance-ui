import StarIconPrimary from './svgs/star-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const StarIcon = (props: IconProps) =>
  useIcon(StarIconPrimary, StarIconPrimary, props);
