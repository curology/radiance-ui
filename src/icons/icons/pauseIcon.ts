import PauseIconPrimary from './svgs/pause-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PauseIconPrimary, PauseIconPrimary, props);
