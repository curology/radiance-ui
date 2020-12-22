import { PreparedEmoji, PreparedEmojiSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PreparedEmoji, PreparedEmojiSecondary, props);
