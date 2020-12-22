import {
  SatisfiedSelectedEmoji,
  SatisfiedSelectedEmojiSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(SatisfiedSelectedEmoji, SatisfiedSelectedEmojiSecondary, props);
