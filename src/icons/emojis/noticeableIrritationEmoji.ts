import {
  NoticeableIrritationEmoji,
  NoticeableIrritationEmojiSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(NoticeableIrritationEmoji, NoticeableIrritationEmojiSecondary, props);
