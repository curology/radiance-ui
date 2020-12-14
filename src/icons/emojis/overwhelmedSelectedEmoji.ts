import {
  OverwhelmedSelectedEmoji,
  OverwhelmedSelectedEmojiSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(OverwhelmedSelectedEmoji, OverwhelmedSelectedEmojiSecondary, props);
