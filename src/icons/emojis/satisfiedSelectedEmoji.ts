import {
  SatisfiedSelectedEmoji,
  SatisfiedSelectedEmojiSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SatisfiedSelectedEmoji, SatisfiedSelectedEmojiSecondary, props);
