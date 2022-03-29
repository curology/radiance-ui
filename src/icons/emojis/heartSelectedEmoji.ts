import { HeartSelectedEmoji, HeartSelectedEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HeartSelectedEmoji, HeartSelectedEmojiSecondary, props);
