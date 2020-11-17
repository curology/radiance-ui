import HugSelectedEmojiPrimary from './svgs/hug-selected-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const HugSelectedEmoji = (props: IconProps) =>
  useIcon(HugSelectedEmojiPrimary, HugSelectedEmojiPrimary, props);
