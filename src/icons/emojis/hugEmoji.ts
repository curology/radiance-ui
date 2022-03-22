import { HugEmoji, HugEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HugEmoji, HugEmojiSecondary, props);
