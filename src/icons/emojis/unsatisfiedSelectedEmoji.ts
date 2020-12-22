import {
  UnsatisfiedSelectedEmoji,
  UnsatisfiedSelectedEmojiSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(UnsatisfiedSelectedEmoji, UnsatisfiedSelectedEmojiSecondary, props);
