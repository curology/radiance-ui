import PinterestIconPrimary from './svgs/pinterest-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const PinterestIcon = (props: IconProps) =>
  useIcon(PinterestIconPrimary, PinterestIconPrimary, props);
