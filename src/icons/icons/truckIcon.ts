import TruckIconPrimary from './svgs/truck-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TruckIconPrimary, TruckIconPrimary, props);
