import TruckIconPrimary from './svgs/truck-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const TruckIcon = (props: IconProps) =>
  useIcon(TruckIconPrimary, TruckIconPrimary, props);
