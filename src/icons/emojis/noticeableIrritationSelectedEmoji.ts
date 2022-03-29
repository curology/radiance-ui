import {
  NoticeableIrritationSelectedEmoji,
  NoticeableIrritationSelectedEmojiSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(
    NoticeableIrritationSelectedEmoji,
    NoticeableIrritationSelectedEmojiSecondary,
    props,
  );
