import SatisfiedEmojiPrimary from './svgs/satisfied-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SatisfiedEmoji = (props: IconProps) =>
  useIcon(SatisfiedEmojiPrimary, SatisfiedEmojiPrimary, props);
