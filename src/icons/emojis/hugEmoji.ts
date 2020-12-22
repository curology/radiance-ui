import { HugEmoji, HugEmojiSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HugEmoji, HugEmojiSecondary, props);
