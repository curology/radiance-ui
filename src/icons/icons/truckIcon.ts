import { TruckIcon, TruckIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TruckIcon, TruckIconSecondary, props);
