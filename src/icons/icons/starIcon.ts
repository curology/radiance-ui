import { StarIcon, StarIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(StarIcon, StarIconSecondary, props);
