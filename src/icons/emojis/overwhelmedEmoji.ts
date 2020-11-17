import OverwhelmedEmojiPrimary from './svgs/overwhelmed-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const OverwhelmedEmoji = (props: IconProps) =>
  useIcon(OverwhelmedEmojiPrimary, OverwhelmedEmojiPrimary, props);
