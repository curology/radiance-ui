import ElatedEmojiPrimary from './svgs/elated-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ElatedEmoji = (props: IconProps) =>
  useIcon(ElatedEmojiPrimary, ElatedEmojiPrimary, props);
