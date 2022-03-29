import { PreparedEmoji, PreparedEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(PreparedEmoji, PreparedEmojiSecondary, props);
