import SmileySelectedEmojiPrimary from './svgs/smiley-selected-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SmileySelectedEmoji = (props: IconProps) =>
  useIcon(SmileySelectedEmojiPrimary, SmileySelectedEmojiPrimary, props);
