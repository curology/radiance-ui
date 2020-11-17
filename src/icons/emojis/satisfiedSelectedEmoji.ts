import SatisfiedSelectedEmojiPrimary from './svgs/satisfied-selected-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SatisfiedSelectedEmoji = (props: IconProps) =>
  useIcon(SatisfiedSelectedEmojiPrimary, SatisfiedSelectedEmojiPrimary, props);
