import TemperatureIconPrimary from './svgs/temperature-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TemperatureIconPrimary, TemperatureIconPrimary, props);
