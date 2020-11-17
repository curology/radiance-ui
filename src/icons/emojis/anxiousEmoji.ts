import AnxiousEmojiPrimary from './svgs/anxious-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const AnxiousEmoji = (props: IconProps) =>
  useIcon(AnxiousEmojiPrimary, AnxiousEmojiPrimary, props);
