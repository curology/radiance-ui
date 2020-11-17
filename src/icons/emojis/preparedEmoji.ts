import PreparedEmojiPrimary from './svgs/prepared-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const PreparedEmoji = (props: IconProps) =>
  useIcon(PreparedEmojiPrimary, PreparedEmojiPrimary, props);
