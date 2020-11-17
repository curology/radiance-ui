import UnsatisfiedEmojiPrimary from './svgs/unsatisfied-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const UnsatisfiedEmoji = (props: IconProps) =>
  useIcon(UnsatisfiedEmojiPrimary, UnsatisfiedEmojiPrimary, props);
