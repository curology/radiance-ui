import {
  NoticeableIrritationSelectedEmoji,
  NoticeableIrritationSelectedEmojiSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(
    NoticeableIrritationSelectedEmoji,
    NoticeableIrritationSelectedEmojiSecondary,
    props,
  );
