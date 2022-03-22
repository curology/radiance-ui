import {
  UnsatisfiedSelectedEmoji,
  UnsatisfiedSelectedEmojiSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(UnsatisfiedSelectedEmoji, UnsatisfiedSelectedEmojiSecondary, props);
