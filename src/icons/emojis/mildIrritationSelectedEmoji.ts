import {
  MildIrritationSelectedEmoji,
  MildIrritationSelectedEmojiSecondary,
} from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(
    MildIrritationSelectedEmoji,
    MildIrritationSelectedEmojiSecondary,
    props,
  );
