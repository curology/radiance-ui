import TimerIconPrimary from './svgs/timer-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const TimerIcon = (props: IconProps) =>
  useIcon(TimerIconPrimary, TimerIconPrimary, props);
