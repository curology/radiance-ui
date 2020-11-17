import SmileyEmojiPrimary from './svgs/smiley-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SmileyEmoji = (props: IconProps) =>
  useIcon(SmileyEmojiPrimary, SmileyEmojiPrimary, props);
