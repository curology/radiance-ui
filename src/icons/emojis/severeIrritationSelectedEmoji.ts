import {
  SevereIrritationSelectedEmoji,
  SevereIrritationSelectedEmojiSecondary,
} from './svgs';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(
    SevereIrritationSelectedEmoji,
    SevereIrritationSelectedEmojiSecondary,
    props,
  );
