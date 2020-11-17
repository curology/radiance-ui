import SunIconPrimary from './svgs/sun-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SunIconPrimary, SunIconPrimary, props);
