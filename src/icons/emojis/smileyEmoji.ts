import { SmileyEmoji, SmileyEmojiSecondary } from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SmileyEmoji, SmileyEmojiSecondary, props);
