import { CircleSolidIcon, CircleSolidIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CircleSolidIcon, CircleSolidIconSecondary, props);
