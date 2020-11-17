import HeartEmojiPrimary from './svgs/heart-emoji.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(HeartEmojiPrimary, HeartEmojiPrimary, props);
