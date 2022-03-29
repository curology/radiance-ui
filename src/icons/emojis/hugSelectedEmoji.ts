import { HugSelectedEmoji, HugSelectedEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HugSelectedEmoji, HugSelectedEmojiSecondary, props);
