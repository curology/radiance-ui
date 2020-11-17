import SparkleEmojiPrimary from './svgs/sparkle-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SparkleEmoji = (props: IconProps) =>
  useIcon(SparkleEmojiPrimary, SparkleEmojiPrimary, props);
