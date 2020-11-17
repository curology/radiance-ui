import MoreIconPrimary from './svgs/more-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(MoreIconPrimary, MoreIconPrimary, props);
