import ClockIconPrimary from './svgs/clock-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockIconPrimary, ClockIconPrimary, props);
