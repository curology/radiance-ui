import { TemperatureIcon, TemperatureIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TemperatureIcon, TemperatureIconSecondary, props);
