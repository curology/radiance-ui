import PlusIconPrimary from './svgs/plus-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PlusIconPrimary, PlusIconPrimary, props);
