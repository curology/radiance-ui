import MoreIconPrimary from './svgs/more-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const MoreIcon = (props: IconProps) =>
  useIcon(MoreIconPrimary, MoreIconPrimary, props);
