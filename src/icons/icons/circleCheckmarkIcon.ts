import { CircleCheckmarkIcon, CircleCheckmarkIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CircleCheckmarkIcon, CircleCheckmarkIconSecondary, props);
