import ConfusedEmojiPrimary from './svgs/confused-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ConfusedEmoji = (props: IconProps) =>
  useIcon(ConfusedEmojiPrimary, ConfusedEmojiPrimary, props);
