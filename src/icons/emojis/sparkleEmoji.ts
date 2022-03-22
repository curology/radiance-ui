import { SparkleEmoji, SparkleEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SparkleEmoji, SparkleEmojiSecondary, props);
