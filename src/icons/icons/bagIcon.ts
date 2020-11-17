import BagIconPrimary from './svgs/bag-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(BagIconPrimary, BagIconPrimary, props);
