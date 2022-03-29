import { SmileySelectedEmoji, SmileySelectedEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SmileySelectedEmoji, SmileySelectedEmojiSecondary, props);
