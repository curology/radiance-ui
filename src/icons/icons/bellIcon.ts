import BellIconPrimary from './svgs/bell-icon.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(BellIconPrimary, BellIconPrimary, props);
