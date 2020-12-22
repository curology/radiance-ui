import { ClockIcon, ClockIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClockIcon, ClockIconSecondary, props);
