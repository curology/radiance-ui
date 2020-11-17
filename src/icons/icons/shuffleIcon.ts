import ShuffleIconPrimary from './svgs/shuffle-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ShuffleIconPrimary, ShuffleIconPrimary, props);
