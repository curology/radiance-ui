import ClockIconPrimary from './svgs/clock-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ClockIcon = (props: IconProps) =>
  useIcon(ClockIconPrimary, ClockIconPrimary, props);
