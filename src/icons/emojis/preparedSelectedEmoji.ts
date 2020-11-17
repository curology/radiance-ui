import PreparedSelectedEmojiPrimary from './svgs/prepared-selected-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const PreparedSelectedEmoji = (props: IconProps) =>
  useIcon(PreparedSelectedEmojiPrimary, PreparedSelectedEmojiPrimary, props);
