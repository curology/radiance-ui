import { PauseIcon, PauseIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PauseIcon, PauseIconSecondary, props);
