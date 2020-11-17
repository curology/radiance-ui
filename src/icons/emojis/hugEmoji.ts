import HugEmojiPrimary from './svgs/hug-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const HugEmoji = (props: IconProps) =>
  useIcon(HugEmojiPrimary, HugEmojiPrimary, props);
