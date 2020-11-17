import UnsatisfiedSelectedEmojiPrimary from './svgs/unsatisfied-selected-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const UnsatisfiedSelectedEmoji = (props: IconProps) =>
  useIcon(
    UnsatisfiedSelectedEmojiPrimary,
    UnsatisfiedSelectedEmojiPrimary,
    props,
  );
