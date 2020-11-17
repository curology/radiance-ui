import StarIconPrimary from './svgs/star-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(StarIconPrimary, StarIconPrimary, props);
