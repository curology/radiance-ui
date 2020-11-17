import ClipboardIconPrimary from './svgs/clipboard-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export const ClipboardIcon = (props: IconProps) =>
  useIcon(ClipboardIconPrimary, ClipboardIconPrimary, props);
