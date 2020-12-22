import {
  SevereIrritationSelectedEmoji,
  SevereIrritationSelectedEmojiSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(
    SevereIrritationSelectedEmoji,
    SevereIrritationSelectedEmojiSecondary,
    props,
  );
