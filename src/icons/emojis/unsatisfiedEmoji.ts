import { UnsatisfiedEmoji, UnsatisfiedEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(UnsatisfiedEmoji, UnsatisfiedEmojiSecondary, props);
