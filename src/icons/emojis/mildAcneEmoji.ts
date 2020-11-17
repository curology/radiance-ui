import MildAcneEmojiPrimary from './svgs/mild-acne-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MildAcneEmoji = (props: IconProps) =>
  useIcon(MildAcneEmojiPrimary, MildAcneEmojiPrimary, props);
