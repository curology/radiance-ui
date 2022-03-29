import {
  MildIrritationSelectedEmoji,
  MildIrritationSelectedEmojiSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(
    MildIrritationSelectedEmoji,
    MildIrritationSelectedEmojiSecondary,
    props,
  );
