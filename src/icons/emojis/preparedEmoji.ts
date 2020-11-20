import { PreparedEmoji } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PreparedEmoji, PreparedEmoji, props);
