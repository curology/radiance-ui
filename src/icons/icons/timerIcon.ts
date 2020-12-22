import { TimerIcon, TimerIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TimerIcon, TimerIconSecondary, props);
