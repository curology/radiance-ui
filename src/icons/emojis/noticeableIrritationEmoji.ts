import {
  NoticeableIrritationEmoji,
  NoticeableIrritationEmojiSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(NoticeableIrritationEmoji, NoticeableIrritationEmojiSecondary, props);
