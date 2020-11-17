import SparkleSelectedEmojiPrimary from './svgs/sparkle-selected-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SparkleSelectedEmoji = (props: IconProps) =>
  useIcon(SparkleSelectedEmojiPrimary, SparkleSelectedEmojiPrimary, props);
