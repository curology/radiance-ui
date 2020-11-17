import OverwhelmedSelectedEmojiPrimary from './svgs/overwhelmed-selected-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const OverwhelmedSelectedEmoji = (props: IconProps) =>
  useIcon(
    OverwhelmedSelectedEmojiPrimary,
    OverwhelmedSelectedEmojiPrimary,
    props,
  );
