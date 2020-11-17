import StarFilledIconPrimary from './svgs/star-filled-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(StarFilledIconPrimary, StarFilledIconPrimary, props);
