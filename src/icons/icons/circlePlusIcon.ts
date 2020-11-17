import CirclePlusIconPrimary from './svgs/circle-plus-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(CirclePlusIconPrimary, CirclePlusIconPrimary, props);
