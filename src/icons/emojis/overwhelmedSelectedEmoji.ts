import {
  OverwhelmedSelectedEmoji,
  OverwhelmedSelectedEmojiSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(OverwhelmedSelectedEmoji, OverwhelmedSelectedEmojiSecondary, props);
