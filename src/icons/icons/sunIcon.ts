import SunIconPrimary from './svgs/sun-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const SunIcon = (props: IconProps) =>
  useIcon(SunIconPrimary, SunIconPrimary, props);
