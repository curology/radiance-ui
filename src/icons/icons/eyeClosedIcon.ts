import { EyeClosedIcon, EyeClosedIconSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(EyeClosedIcon, EyeClosedIconSecondary, props);
