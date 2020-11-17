import BagIconPrimary from './svgs/bag-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const BagIcon = (props: IconProps) =>
  useIcon(BagIconPrimary, BagIconPrimary, props);
