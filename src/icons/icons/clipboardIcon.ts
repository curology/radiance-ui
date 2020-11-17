import ClipboardIconPrimary from './svgs/clipboard-icon.svg';
import { IconProps, useIcon } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ClipboardIconPrimary, ClipboardIconPrimary, props);
