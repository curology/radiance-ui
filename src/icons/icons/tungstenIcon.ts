import TungstenIconPrimary from './svgs/tungsten-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(TungstenIconPrimary, TungstenIconPrimary, props);
