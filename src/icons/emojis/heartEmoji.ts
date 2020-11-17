import HeartEmojiPrimary from './svgs/heart-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const HeartEmoji = (props: IconProps) =>
  useIcon(HeartEmojiPrimary, HeartEmojiPrimary, props);
